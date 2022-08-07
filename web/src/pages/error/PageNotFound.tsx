import React from "react";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
    return (
        <div className="container">
            <div className="page-not-found-title">
                Page not found
            </div>
            <div className="page-not-found-subtitle">
                The page you are looking for does not exist.
            </div>
        </div>
    );
}

export default PageNotFound;