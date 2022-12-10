import {CircleElement, ForeignObjectElement, LineElement} from "../types/types";

export const checkIsObject = (data: any) => typeof data === 'object' && !Array.isArray(data)
export const getCoordinate = (obj: any, key: string | number): number => checkIsObject(obj) ? obj[key] : 0

export const setCoordinates = (link: LineElement, circle: CircleElement, text: ForeignObjectElement) => {
    const radius = 50
    const side = 2 * radius * Math.cos(Math.PI / 4)

    link
        .attr("x1", (d) => getCoordinate(d.source, 'x'))
        .attr("y1", (d) => getCoordinate(d.source, 'y'))
        .attr("x2", (d) => getCoordinate(d.target, 'x'))
        .attr("y2", (d) => getCoordinate(d.target, 'y'))

    circle
        .attr("cx", (d) => getCoordinate(d, 'x'))
        .attr("cy", (d) => getCoordinate(d, 'y'))
        .attr("r", radius)

    text
        .attr("x", (d) => getCoordinate(d, 'x') - (side / 2))
        .attr("y", (d) => getCoordinate(d, 'y') - (side / 2))
        .attr("width", side)
        .attr("height", side)
}
