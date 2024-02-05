import React, {useState} from "react";
// @ts-ignore
import close from '../Modal/close.svg';
// @ts-ignore
import dropdown from './accordion-button.svg';
import {PricePlans, Page, Products} from '../../data'

const Header = ({setContent, content, setFilterByActive, filterByActive}: any) => {
    const title = filterByActive === true ? 'Active' : filterByActive === false ? 'Inactive' : "";
    const [contentValue, setContentValue] = useState(false);
    const [showList, setShowList] = useState(false);
    const options = [
        "PricePlans", "Page", "Products"
    ];

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-content-search">
                    <input type="text" placeholder="Search"/>
                    <i className="fa fa-search"></i>
                </div>

                <div className="header-content-search">
                    <input type="text" defaultValue={title}/>
                    <img onClick={() => setFilterByActive("")} src={close} alt="close"/>
                    <img onClick={() => setShowList(!showList)} src={dropdown} alt="close"/>
                    {showList && <div className="header-content-search-list">
                        <ul onClick={() => {
                            setFilterByActive(true);
                            setShowList(false);
                        }}>Active
                        </ul>
                        <ul onClick={() => {
                            setFilterByActive(false);
                            setShowList(false);
                        }}>Inactive
                        </ul>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default Header;