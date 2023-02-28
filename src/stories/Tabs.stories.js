import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Tabs from "../components/Tab/Tab";

export default {
    title: 'Tabs',
    component: Tabs,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/tab1']}>
                <Story />
            </MemoryRouter>
        ),
    ],
};

const tabs = [
    {
        label: 'Tab 1',
        to: '/tab1',
        content: 'This is the content of Tab 1',
    },
    {
        label: 'Tab 2',
        to: '/tab2',
        content: 'This is the content of Tab 2',
    },
    {
        label: 'Tab 3',
        to: '/tab3',
        content: 'This is the content of Tab 3',
    },
];

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs,
    isButtonTabs: true,
    isRenderContent: true,
    handleTabClick: action('handleTabClick'),
};

export const ButtonTabs = Template.bind({});
ButtonTabs.args = {
    tabs,
    isButtonTabs: true,
    handleTabClick: action('handleTabClick'),
};

export const RenderContent = Template.bind({});
RenderContent.args = {
    tabs,
    isRenderContent: true,
    handleTabClick: action('handleTabClick'),
};