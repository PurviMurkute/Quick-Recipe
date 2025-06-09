import React from "react";

const Button = ({ btntext, onClick, btnposition }) => {
    const BUTTON_POSITION = {
        center: "block mx-auto my-3"
    }
  return (
    <div>
      <button
        className={`bg-teal-700 text-teal-50 font-medium px-4 py-2 border-none rounded-md shadow-xl focus:outline-none hover:bg-teal-800 ${BUTTON_POSITION[btnposition]}`}
        onClick={onClick}
      >
        {btntext}
      </button>
    </div>
  );
};

export default Button;
