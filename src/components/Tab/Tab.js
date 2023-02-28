import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Tabs = ({ tabs, isButtonTabs = false, isRenderContent = false }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].to);

    const handleTabClick = (to) => {
        setActiveTab(to);
    };

    const getTabClass = (value) => {
        if (activeTab === value) {
            return 'active';
        }
        return '';
    };

    const TabHeader = ({ tab }) => {
        if (isButtonTabs) {
            return (
                <ButtonTab
                    className={getTabClass(tab.to)}
                    onClick={() => handleTabClick(tab.to)}
                >
                    {tab.label}
                </ButtonTab>
            );
        }

        return (
            <LinkTab
                to={tab.to}
                className={getTabClass(tab.to)}
                onClick={() => handleTabClick(tab.to)}
            >
                {tab.label}
            </LinkTab>
        );
    };

    return (
        <Wrapper>
            <HeaderWrapper>
            <Header>
                {tabs.map((tab) => (
                    <TabHeader key={tab.label} tab={tab} />
                ))}
            </Header>
            </HeaderWrapper>
            {
                isRenderContent &&  <Content>
                    {tabs.find((tab) => tab.to === activeTab).content}
                </Content>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const HeaderWrapper = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 10px;
  }

  @media (min-width: 500px) {
    overflow-x: hidden;
  }
`;

const Header = styled.div`
  display: flex;
  border: 1px solid #ccc;
`;

const ButtonTab = styled.button`
  padding: 12px;
  background-color: #fff;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 16px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #0074d9;
  }
`;

const LinkTab = styled(Link)`
  padding: 12px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  border-bottom: 3px solid transparent;

  &.active {
    border-bottom: 3px solid #0074d9;
  }
`;

const Content = styled.div`
  padding: 16px;
`;


export default Tabs;
