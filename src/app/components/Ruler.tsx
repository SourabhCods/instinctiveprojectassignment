"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { useState, useRef } from "react";

export default function Ruler() {
  const [scrubberX, setScrubberX] = useState(0);
  const isDragging = useRef(false);

  const width = 1400;
  const hours = Array.from({ length: 25 }, (_, i) => `${i}:00`);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isDragging.current) {
      const svgRect = e.currentTarget.getBoundingClientRect();
      let x = e.clientX - svgRect.left;
      if (x < 0) x = 0;
      if (x > width) x = width;
      setScrubberX(x);
    }
  };

  return (
    <div className="mt-5 mr-2">
      <svg
        width={width}
        height="50"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Ruler Line */}
        <line x1="0" y1="40" x2={width} y2="40" stroke="#ccc" strokeWidth="2" />

        {/* Hour Marks */}
        {hours.map((h, i) => {
          const x = (i / 24) * width;
          return (
            <g key={i}>
              <line x1={x} y1="30" x2={x} y2="50" stroke="#ccc" strokeWidth="1" />
              <text
                x={x}
                y="25"
                fill="#fff"
                fontSize="12"
                textAnchor="middle"
              >
                {h}
              </text>
            </g>
          );
        })}

        {/* Draggable Scrubber */}
        <circle
          cx={scrubberX}
          cy="40"
          r="8"
          fill="#ffcc00"
          stroke="#333"
          onMouseDown={handleMouseDown}
          style={{ cursor: "grab" }}
        />
      </svg>
    </div>
  );
}