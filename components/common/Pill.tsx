import { PillProps } from "../../interfaces";
import React from "react";

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
    return(
    <button
    className="py-2 px-4 m-2 bg-orange-200 hover:opacity-50 text-orange-900 rounded-full"
    onClick={onClick}
    >
        {label}
    </button>
    );
}
export default Pill;
