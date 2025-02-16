import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const DotGrid = ({ width, height, dotSpacing = 50, dotRadius = 3 }) => {
  const svgRef = useRef(null);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#fafafa");

    const rows = Math.ceil(height / dotSpacing);
    const cols = Math.ceil(width / dotSpacing);

    const dotPositions = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dotPositions.push([col * dotSpacing, row * dotSpacing]);  // X, Y positions
      }
    }

    setDots(dotPositions);
  }, [width, height, dotSpacing]);

  return (
    <svg ref={svgRef}>
      {/* Render dots */}
      {dots.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={dotRadius} fill="#e3e3e3" />
      ))}
    </svg>
  );
};

export default DotGrid;
