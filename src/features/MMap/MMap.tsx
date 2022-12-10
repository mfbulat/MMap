import React from "react";
import {Data} from "./types/types";
import {useSimulate} from "./hooks/useSimulate";

interface IProps {
    data: Data[]
    width?: number
    height?: number
}

const MMap: React.FC<IProps> = ({data = [], width = 600, height = 600}) => {

    const {ref} = useSimulate(data)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: "lightgrey"
        }}>
            <svg ref={ref} viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`} width={width} height={height}/>
        </div>
    );
}
export default MMap;
