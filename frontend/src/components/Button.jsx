import { useState } from "react";

function Button(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${props.className || " "} hover relative`}
    >
      <props.icon width={props.width || "1em"} height={props.height || "1em"} />
      {hovered && (
        <div className="absolute text-xs bg-gray-700/50 -bottom-5 right-0 py-0.5 px-2 rounded">
          {props.info || "info"}
        </div>
      )}
    </div>
  );
}

export default Button;
