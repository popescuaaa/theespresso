import React, { useState } from "react";
import { siteMap } from "./siteMap";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
    const location = useLocation();
    const path = location.pathname;

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={"side-menu" + (isExpanded ? " side-menu-expanded" : "")}>
            <div className="side-menu-header">
                <button onClick={() => setIsExpanded(!isExpanded)} className={"btn-trigger" + (isExpanded ? " btn-trigger-expanded" : "")}>
                    &gt;&gt;
                </button>
                <div className="side-menu-header-title">
                    Todo's
                </div>
            </div>
            <div className="side-menu-body">
                {siteMap.map((item, index) => {
                    return (
                        <div className="side-menu-body-item" key={index}>
                            <div className="side-menu-body-item-title">
                                <Link to={item.path} className={path === item.path ? "active" : ""}>
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