import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from "./Tab";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Tabs', () => {
    const tabs = [
        { label: 'Tab 1', to: '/tab1', content: 'Tab 1 content' },
        { label: 'Tab 2', to: '/tab2', content: 'Tab 2 content' },
        { label: 'Tab 3', to: '/tab3', content: 'Tab 3 content' },
    ];

    it('renders the tabs and content correctly', () => {
        const { getByText, queryByText } = render(<Router><Tabs tabs={tabs} isRenderContent /></Router>);

        // check that the first tab is active by default
        expect(getByText('Tab 1')).toHaveClass('active');
        expect(getByText('Tab 1 content')).toBeInTheDocument();
        expect(queryByText('Tab 2 content')).not.toBeInTheDocument();

        // click on the second tab
        fireEvent.click(getByText('Tab 2'));

        // check that the second tab is active and its content is displayed
        expect(getByText('Tab 2')).toHaveClass('active');
        expect(queryByText('Tab 1 content')).not.toBeInTheDocument();
        expect(getByText('Tab 2 content')).toBeInTheDocument();
    });

});