import BigTree from "@/app/lib/sceneryElements/bigTree.svg";
import Mountains from "@/app/lib/sceneryElements/mountains.svg";
import Tree from "@/app/lib/sceneryElements/tree.svg";
import React from "react";

const availableItems = {
  1: [Tree],
  2: [Tree, BigTree],
  3: [Mountains],
  4: [Mountains],
};

const heightRanges = {
  1: { min: 25, max: 45 },
  2: { min: 20, max: 40 },
  // 3: { min: 15, max: 35 },
  3: { min: 10, max: 40 },
  // 4: { min: 10, max: 30 },
  4: { min: 20, max: 80 },
};

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const generateElements = (layer: 1 | 2 | 3 | 4, numElements: number) => {
  const elementSet = availableItems[layer];
  const elements: JSX.Element[] = [];
  const positions1: number[] = [];
  const positions2: number[] = [];

  for (let i = 0; i < numElements; i++) {
    const SceneryElement1 = elementSet[getRandom(0, elementSet.length)];
    const SceneryElement2 = elementSet[getRandom(0, elementSet.length)];
    const heightRange = heightRanges[layer];

    const height1 = getRandom(heightRange.min, heightRange.max);
    const height2 = getRandom(heightRange.min, heightRange.max);

    const lowerBound = i * (100 / numElements);
    const upperBound = (i + 1) * (100 / numElements);
    let displacementCandidate = getRandom(lowerBound, upperBound);
    while (positions1.find((p) => Math.abs(p - displacementCandidate) < ((100 / numElements) / 2))) {
      displacementCandidate = getRandom(lowerBound, upperBound);
    }
    const displacement1 = displacementCandidate;
    positions1.push(displacement1);

    displacementCandidate = getRandom(lowerBound, upperBound);
    while (positions2.find((p) => Math.abs(p - displacementCandidate) < ((100 / numElements) / 2))) {
      displacementCandidate = getRandom(lowerBound, upperBound);
    }
    const displacement2 = displacementCandidate;
    positions2.push(displacement1);

    elements.push(
      <SceneryElement1
      key={`layer${layer}-el${i + 1}-first`}
        className="parallax-element pe-layer-first"
        style={{
          height: height1 + "vh",
          marginLeft: displacement1 + "%"
        }}
      ></SceneryElement1>
    );

    elements.push(
      <SceneryElement2
        key={`layer${layer}-el${i + 1}-second`}
        className="parallax-element pe-layer-second"
        style={{
          height: height2 + "vh",
          marginLeft: displacement2 + "%"
        }}
      ></SceneryElement2>
    );

    console.log("Layer: ", layer, " Item: ", i, " Margin:", displacement1);
  }

  return elements;
};
