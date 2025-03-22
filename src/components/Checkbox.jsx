import React, { useState } from "react";

export function Checkbox({ label }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded bg-white appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span>{label}</span>
        </div>
    );
}
