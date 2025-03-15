import React, { useEffect, useRef } from 'react';
import { select, selectAll } from 'd3-selection';
import { pack as d3Pack, hierarchy } from 'd3-hierarchy';
import { transition } from 'd3-transition';
import type { HierarchyNode } from 'd3-hierarchy';
import 'd3-transition';

interface CircleData {
  name: string;
  value: number;
  color: string;
  children?: CircleData[];
}

const data: CircleData = {
  name: "Total",
  value: 1200,
  color: "#0f172a",
  children: [
    {
      name: "Ethereum",
      value: 800,
      color: "#627EEA",
      children: [
        {
          name: "Share",
          value: 300,
          color: "rgba(147, 197, 253, 0.8)"
        },
        {
          name: "Tag",
          value: 200,
          color: "rgba(196, 181, 253, 0.8)"
        },
        {
          name: "Place",
          value: 150,
          color: "rgba(251, 207, 232, 0.8)"
        },
        {
          name: "Space",
          value: 150,
          color: "rgba(167, 243, 208, 0.8)"
        }
      ]
    },
    {
      name: "Polygon",
      value: 400,
      color: "#8247E5",
      children: [
        {
          name: "Share",
          value: 150,
          color: "rgba(147, 197, 253, 0.8)"
        },
        {
          name: "Tag",
          value: 100,
          color: "rgba(196, 181, 253, 0.8)"
        },
        {
          name: "Place",
          value: 50,
          color: "rgba(251, 207, 232, 0.8)"
        },
        {
          name: "Space",
          value: 100,
          color: "rgba(167, 243, 208, 0.8)"
        }
      ]
    }
  ]
};

const TVLCirclePacking: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;

    select(svgRef.current).selectAll("*").remove();

    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; background: #0f172a");

    // 배경에 별 추가
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2
    }));

    svg.selectAll(".star")
      .data(stars)
      .join("circle")
      .attr("class", "star")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.size)
      .attr("fill", "#fff")
      .attr("opacity", () => Math.random() * 0.8 + 0.2)
      .style("animation", () => `twinkle ${Math.random() * 3 + 2}s infinite`);

    const packLayout = d3Pack<CircleData>()
      .size([width - 100, height - 100])
      .padding(20);

    const root = hierarchy(data)
      .sum(d => d.value);

    const nodes = packLayout(root);

    const g = svg.append("g")
      .attr("transform", `translate(50, 50)`);

    // 궤도 효과
    nodes.descendants().forEach(node => {
      if (node.depth === 1) {
        g.append("circle")
          .attr("cx", node.x)
          .attr("cy", node.y)
          .attr("r", node.r + 20)
          .attr("fill", "none")
          .attr("stroke", "rgba(255, 255, 255, 0.1)")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "5,5");
      }
    });

    const node = g.selectAll("g")
      .data(nodes.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    // 글로우 효과
    const defs = svg.append("defs");
    
    defs.append("filter")
      .attr("id", "glow")
      .append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");

    // 노드 원 추가
    node.append("circle")
      .attr("r", d => d.r)
      .attr("fill", d => d.data.color)
      .attr("opacity", d => d.depth === 0 ? 0.1 : 0.8)
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .style("filter", "url(#glow)");

    // 텍스트 레이블
    const text = node.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .attr("fill", "#fff")
      .style("text-shadow", "0 0 3px rgba(0,0,0,0.5)");

    text.append("tspan")
      .attr("x", 0)
      .attr("y", d => d.depth === 2 ? -5 : 0)
      .attr("font-size", d => d.r / 4)
      .text(d => d.data.name);

    text.append("tspan")
      .attr("x", 0)
      .attr("y", d => d.depth === 2 ? 10 : 0)
      .attr("font-size", d => d.r / 5)
      .text(d => d.depth > 0 ? `$${d.data.value}M` : "");

    // 인터랙티브 효과
    node
      .on("mouseover", function(event: MouseEvent, d: HierarchyNode<CircleData>) {
        select(this)
          .transition()
          .duration(300)
          .attr("transform", `translate(${d.x},${d.y}) scale(1.1)`);

        const tooltip = select("body").append("div")
          .attr("class", "tvl-tooltip")
          .style("position", "absolute")
          .style("background", "rgba(15, 23, 42, 0.9)")
          .style("color", "#fff")
          .style("padding", "12px")
          .style("border-radius", "8px")
          .style("font-size", "14px")
          .style("backdrop-filter", "blur(4px)")
          .style("border", "1px solid rgba(255,255,255,0.1)")
          .style("box-shadow", "0 4px 6px rgba(0,0,0,0.1)")
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 10}px`);

        tooltip.html(`
          <div style="font-weight: bold">${d.data.name}</div>
          <div style="margin-top: 4px">TVL: $${d.data.value}M</div>
          ${d.depth === 1 ? `<div style="margin-top: 4px">Share: ${(d.data.value / data.value * 100).toFixed(1)}%</div>` : ''}
        `);
      })
      .on("mouseout", function(event: MouseEvent, d: HierarchyNode<CircleData>) {
        select(this)
          .transition()
          .duration(300)
          .attr("transform", `translate(${d.x},${d.y}) scale(1)`);
        
        selectAll(".tvl-tooltip").remove();
      });

  }, []);

  return (
    <div className="tvl-circle-packing">
      <svg ref={svgRef}></svg>
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
};

export default TVLCirclePacking; 