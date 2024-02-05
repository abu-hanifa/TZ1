import React, {useState} from "react";
import './App.scss';
import Header from './Components/Header'
import MainContent from "./Components/MainContent";
import {PricePlans, Page, Products} from './data'

const App = () => {
    const [content, setContent] = useState(PricePlans);
    const [filterByActive, setFilterByActive] = useState("");
    let filteredContent = content.filter((c: any) => filterByActive !== "" ? c.active === filterByActive : c.id);
    return(
        <div className="app">
            <Header content={content} setFilterByActive={setFilterByActive} filterByActive={filterByActive} setContent={setContent} />
            <MainContent content={filteredContent}
                         setContent={setContent}
            />
        </div>
    )
}

export default App;