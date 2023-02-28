import './App.css';
import Tabs from "./components/Tab/Tab";
import {  Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  const tabsForLinks = [
    {
      label: 'contacts',
      to: 'contacts',
    },
    {
      label: 'home',
      to: 'home',
    },
    {
      label: 'about',
      to: 'about',
    },
  ];



  return (
    <>
      <div className="app">
        <Tabs tabs={tabsForLinks} isButtonTabs={false} isRenderContent={false} />
      </div>
        <Routes>
          <Route exact path="/"/>
          <Route path="/about" element={<About/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </>
  );
}

export default App;
