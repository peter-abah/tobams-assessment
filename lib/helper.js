import React from "react";

export const createListOfNodes = (NodeComponent, numberOfNodes) => {
  const nodeList = Array.from(new Array(numberOfNodes), (_, index) => (
    <NodeComponent index={index} />
  ));

  return nodeList;
};
