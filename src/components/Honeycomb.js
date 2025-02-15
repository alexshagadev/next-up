"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";

const HexagonGrid = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const hexRadius = 18;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("background", "#121212");

    const hexbin = d3Hexbin()
      .radius(hexRadius)
      .extent([
        [0, 0],
        [width, height],
      ]);

    const hexWidth = hexRadius * Math.sqrt(3);
    const hexHeight = hexRadius * 2;

    const cols = Math.ceil(width / hexWidth);
    const rows = Math.ceil(height / (hexHeight * 0.75));

    const points = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexWidth;
        let y = row * hexHeight * 0.75;

        if (col % 2 === 1) {
          y += hexHeight / 2;
        }

        points.push([x, y]);
      }
    }

    svg
      .selectAll("path")
      .data(hexbin(points))
      .enter()
      .append("path")
      .attr("d", (d) => `M${d.x},${d.y}${hexbin.hexagon()}`)
      .attr("stroke", "#1f1f1f")
      .attr("stroke-width", "2")
      .attr("fill", "#121212")
      .attr("opacity", 1);
  }, []);

  return <svg ref={svgRef} className="absolute inset-0" />;
};

export default HexagonGrid;