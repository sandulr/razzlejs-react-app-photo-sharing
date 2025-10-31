import * as React from "react";

function SvgLoading(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={50}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle cx={20} cy={50} fill="#ff0053" r={30}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="20;80;20"
          begin="-0.5s"
        />
      </circle>
      <circle cx={80} cy={50} fill="#6a08fb" r={30}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="20;80;20"
          begin="0s"
        />
      </circle>
      <circle cx={20} cy={50} fill="#ff0053" r={30}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="20;80;20"
          begin="-0.5s"
        />
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default SvgLoading;
