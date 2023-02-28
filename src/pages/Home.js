import React, { useState } from 'react';
import Tabs from "../components/Tab/Tab";

const tabsForButton = [
    {
        label: 'Tab 1',
        to: 'Tab 1',
        content: <p>tab 1</p>
    },
    {
        label: 'Tab 2',
        to: 'Tab 2',
        content: <p>tab 2</p>
    },
    {
        label: 'Tab 3',
        to: 'Tab 3',
        content: <p>tab 3</p>
    },
];

const Home = () => {
    return (
        <div>
            Tabs with Button
            <Tabs tabs={tabsForButton} isButtonTabs={true} isRenderContent={true}/>
        </div>
    )
}

export default Home