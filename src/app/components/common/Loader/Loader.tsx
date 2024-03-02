import React from "react";

interface LoaderType {
    visible?: boolean;
}

const Loader: React.FC<LoaderType> = ({ visible }) => {
    return <span className={`loader ${visible ? "hidden" : ""}`}></span>;
};

export default React.memo(Loader);
