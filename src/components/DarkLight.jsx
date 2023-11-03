import { useState } from "react";
import "./DarkLight.css";

function DarkLight() {
    const [darkMode, setDarkMode] = useState(false);

    function handleDarkMode(event) {
        const checked = event.target.checked;
        if (checked) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }

    return (
        <div className={"darkLight" + (darkMode ? " dark" : " light")}>
            <h1>Dark and Light</h1>
            <input type="checkbox" onChange={handleDarkMode} /> Dark?
        </div>
    );
}

export default DarkLight;
