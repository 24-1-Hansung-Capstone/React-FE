// ToggleMenu.jsx

import React, { useState } from "react";
import arrow_down from "../../Asset/arrow_down.svg";
import arrow_up from "../../Asset/arrow_up.svg";

export default function ToggleMenu({ context }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ marginRight: "5px" }}>{context}</div>
            <div style={{ marginRight: "5px", marginLeft: "auto" }}>
                {isOpen ? (
                    <img src={arrow_up} alt="arrow_up" style={{ width: "20px", height: "20px" }} onClick={handleToggle} />
                ) : (
                    <img src={arrow_down} alt="arrow_down" style={{ width: "20px", height: "20px" }} onClick={handleToggle} />
                )}
            </div>
            {isOpen && ( 
                <ul>
                    <h2>열린 메뉴1</h2>
                    <h2>열린 메뉴2</h2>
                </ul>
            )}
        </div>
    );
}
