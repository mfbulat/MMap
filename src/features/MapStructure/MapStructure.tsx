import React, {useState} from 'react';
import {CarryOutOutlined, CheckOutlined, FormOutlined} from '@ant-design/icons';
import {Select, Switch, Tree} from 'antd';
import type {DataNode} from 'antd/es/tree';
import {NOTIES} from "../../app/mocks/noties";
import {Data} from "../MMap/types/types";

const treeData: DataNode[] = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <CarryOutOutlined/>,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <CarryOutOutlined/>,
                children: [
                    {title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined/>},
                    {
                        title: (
                            <>
                                <div>multiple line title</div>
                                <div>multiple line title</div>
                            </>
                        ),
                        key: '0-0-0-1',
                        icon: <CarryOutOutlined/>,
                    },
                    {title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined/>},
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                icon: <CarryOutOutlined/>,
                children: [{title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined/>}],
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                icon: <CarryOutOutlined/>,
                children: [
                    {title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined/>},
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                        icon: <CarryOutOutlined/>,
                        switcherIcon: <FormOutlined/>,
                    },
                ],
            },
        ],
    },
    {
        title: 'parent 2',
        key: '0-1',
        icon: <CarryOutOutlined/>,
        children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                icon: <CarryOutOutlined/>,
                children: [
                    {title: 'leaf', key: '0-1-0-0', icon: <CarryOutOutlined/>},
                    {
                        title: 'lead', key: '0-1-0-6', icon: <CarryOutOutlined/>, children: [
                            {title: 'leaf', key: '0-0-0-05', icon: <CarryOutOutlined/>},
                            {
                                title: (
                                    <>
                                        <div>multiple line title</div>
                                        <div>multiple line title</div>
                                    </>
                                ),
                                key: '0-0-0-135',
                                icon: <CarryOutOutlined/>,
                            },
                            {title: 'leaf', key: '0-0-0-2654', icon: <CarryOutOutlined/>},
                        ],
                    },
                ],
            },
        ],
    },
];

function deepCopy(data: Data[]): Data[] {
    return JSON.parse(JSON.stringify(data))
}

const to = (NOTES: Data[]) => {
    const notes: Data[] = deepCopy(NOTES).sort((a, b) => a.level - b.level).reverse()
    const obj: any = {}
    let countLevel = notes[0].level
    for (let i = 0; i < notes.length; i++) {
        obj[notes[i].id] = notes[i]
    }
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].level === countLevel && !notes[i].root) {
            const source = obj[notes[i].source]
            source.children === undefined
                ? source.children = [notes[i]]
                : source.children.push(notes[i])
            source.key = notes[i].id
            delete obj[notes[i].id]
            i !== notes.length - 1 && (countLevel = notes[i + 1].level)
        }
    }
    return [obj[0]]
}

const MapStructure: React.FC = () => {
    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };

    return (
        <Tree
            showLine={true}
            onSelect={onSelect}
            treeData={to(NOTIES)}
        />
    );
};

export default MapStructure;
