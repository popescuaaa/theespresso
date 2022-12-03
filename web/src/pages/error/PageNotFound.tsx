import React from "react";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
    return (
        <>
            <p className="page-not-found-title row">
                Page not found
            </p>
            <p className="page-not-found-subtitle row">
                The page you are looking for does not exist.
            </p>
        </>
    );
}

export default PageNotFound;