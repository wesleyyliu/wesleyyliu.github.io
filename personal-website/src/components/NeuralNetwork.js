import React, { useEffect, useState } from 'react';

const NeuralNetwork = () => {
  const [layer, setLayer] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const layers = [2, 5, 5, 2]; 
  const speed = .005
  const nodeRadius = 10;
  const layerSpacing = 150;
  const verticalSpacing = 60;
  const color = '#FAFAFA';
  
  const width = (layers.length) * layerSpacing + nodeRadius * 2;
  const height = Math.max(...layers) * verticalSpacing + nodeRadius * 2;

  useEffect(() => {
    // animate movement every 4 milliseconds
    const interval = setInterval(() => {
      if (isForward) {
        // move forward
        setLayer(layer + speed);
        if (layer >= layers.length - 1) {
          setIsForward(false);
        }
      } else {
        // move backward
        setLayer(layer - speed);
        if (layer <= 0) {
          setIsForward(true);
        }
      }
    }, 4);
    return () => clearInterval(interval);
  }, [layer]);

  const nodes = [];
  for (let i = 0; i < layers.length; i++) {
    const numNodes = layers[i];
    const currLayer = [];
    for (let j = 0; j < numNodes; j++) {
      currLayer.push({
        x: layerSpacing * i + 10, 
        y: height / 2 + (verticalSpacing * (numNodes / 2 - j)),
      });
    }
    nodes.push(currLayer);
  };

  const nodeBrightness = (nodeLayer) => {
    return 1 / (Math.abs(nodeLayer - layer) + 1) ** 2;
  };

  const lineBrightness = (nodeLayer) => {
    return 1 / (Math.abs(nodeLayer - layer) + 1) ** 2;
  };

  return (
    <svg width={width} height={height}>
      {nodes.map((layerNodes, i) => {
        return layerNodes.map((node, _) => {
          return (
            <circle
              cx={node.x}
              cy={node.y}
              r={nodeRadius}
              fill={color}
              opacity={nodeBrightness(i)}
            />
          )
        })
      })};
      {nodes.map((layerNodes, i) => {
        return layerNodes.map((node, _) => {
          if (i + 1 < nodes.length) {
            return (
              nodes[i + 1].map((node2, _) => {
                return (
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={node2.x}
                  y2={node2.y}
                  stroke={color}
                  strokeWidth="1"
                  opacity={lineBrightness(i)}
                />
                )
              })
            )
          }
        })
      })};
    </svg>
  );
};

export default NeuralNetwork;