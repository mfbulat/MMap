import {BaseType, Selection} from "d3-selection";
import {SimulationLinkDatum, SimulationNodeDatum} from "d3-force";

export type LineElement = Selection<BaseType | SVGLineElement, Data, SVGGElement, unknown>
export type CircleElement = Selection<SVGCircleElement, Data, SVGSVGElement | null, unknown>
export type ForeignObjectElement = Selection<SVGForeignObjectElement, Data, SVGSVGElement | null, unknown>
export type Data = {
    id: number | string
    root?: boolean
    title?: string
    children?: Data
    level: number
    source?: any
} & SimulationNodeDatum & SimulationLinkDatum<Data>
