import React, { useState } from "react";
import { siteMap } from "./siteMap";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
    const location = useLocation();
    const path = location.pathname;

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={"side-menu" + (expanded ? " side-menu-expanded" : "")}>
            <div className="side-menu-header">
                <button onClick={() => setExpanded(!expanded)} className={"btn-trigger" + (expanded ? " btn-trigger-expanded" : "")}>
                    <i className="fa-solid fa-angles-right"/>
                </button>
                <div className="side-menu-header-title">
                    Todo's
                </div>
            </div>
            <div className="side-menu-body">
                {siteMap.map((item, index) => {
                    return (
                        <div className="side-menu-body-item" key={index}>
                            <i className={item.icon}/>
                            <div className="side-menu-body-item-title">
                                <Link onClick={() => setExpanded(false)} to={item.path} className={path === item.path ? "active" : ""}>
                                    {item.name}
                                </Link>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    )
}

export default SideMenu;