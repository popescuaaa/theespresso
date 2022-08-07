import React from "react";
import { siteMap } from "./siteMap";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="side-menu">
            <div className="side-menu-header">
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