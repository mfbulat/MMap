import React, {useRef, useState} from 'react';
import MMap from "../../features/MMap";
import {NOTIES} from "../../app/mocks/noties";
import {Layout} from 'antd';
import LeftMenu from "../../features/LeftMenu";
import MapStructure from "../../features/MapStructure";


const PageSecond = () => {
    const DATA = JSON.parse(JSON.stringify(NOTIES))
    return (
        <Layout style={{minHeight: '100vh'}}>
            <LeftMenu/>
            <MapStructure/>
            <MMap data={[...DATA]} width={800} height={800}/>
        </Layout>
    )


}

export default PageSecond;
