import { useState } from "react";

function Button(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${
        props.className || "p-3"
      } flex flex-col items-center justify-center ${
        !props.disabled && "hover"
      } relative`}
    >
      <props.icon width={props.width || "1em"} height={props.height || "1em"} />
      {hovered && (
        <div className="absolute text-xs bg-gray-900/70 -bottom-6 py-0.5 px-2 rounded text-white">
          {props.info || "info"}
        </div>
      )}
    </div>
  );
}

export default Button;
