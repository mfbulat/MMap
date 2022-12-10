import {LegacyRef, useEffect, useRef} from "react";
import * as d3 from "d3";
import {getCoordinate, setCoordinates} from "../utils/helpers";
import {Data} from "../types/types";

export const useSimulate = (data: Data[]) =>{
    const ref: LegacyRef<SVGSVGElement> | undefined = useRef(null)

    useEffect(() => {
        const circles = ref?.current?.childNodes && Array.from(ref.current.childNodes).find((c: any) => c.className.baseVal === 'node')
        if (data.length > 0 && !circles) {
            const svgElement = d3.select(ref?.current)

            const element = svgElement.selectAll("g").data(data)

            const link = svgElement.append("g")
                .attr('id', 'links')
                .attr("stroke", "#999")
                .attr("stroke-opacity", 0.6)
                .selectAll("line")
                .data(data)
                .join("line");

            const node = element.enter()
                .append("g")
                .attr('class', 'node')
                .attr("fill", "#fff")
                .attr("stroke", "#000")
                .attr("stroke-width", 1.5)

            const circle = node.append("circle")
                .attr("fill", d => d.level === 1 ? ("rgb(192,214,94)") : (d.root ? 'rgb(142,224,120)' : "rgb(234,232,232)"))
                .attr("stroke", d => null)
                .attr("cx", (d) => d.root ? 0 : getCoordinate(d, 'x'))
                .attr("cy", (d) => d.root ? 0 : getCoordinate(d, 'y'))

            const text = node.append("foreignObject")

            text
                .append("xhtml:div")
                .attr('style',
                    "display: flex; justify-content: center; align-items: center; height: 100%; ")
                .append("xhtml:span")
                .attr('style',
                    "color: red; word-break: break-word; text-align: center; max-height: 100%;")
                .html((d) => d.title + ' level: ' +  d.level || '')


            d3.forceSimulation(data)
                .force("link", d3.forceLink(data).id((d: any) => d.id).distance(0).strength(1))
                .velocityDecay(0.9)
                .force("charge", d3.forceManyBody().strength(-300))
                .force("x", d3.forceX())
                .force("y", d3.forceY())
                .force("r", d3.forceRadial((d) => 0))
                .force("collide", d3.forceCollide(d => d.root ? 100 : 60))
                .on("tick", () => setCoordinates(link, circle, text));
        }
    }, [data])

    return {ref}

}
