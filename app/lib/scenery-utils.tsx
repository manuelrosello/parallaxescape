import BigTree from "@/app/lib/sceneryElements/bigTree.svg";
import Mountains from "@/app/lib/sceneryElements/mountains.svg";
import Tree from "@/app/lib/sceneryElements/tree.svg";
import Grass from "@/app/lib/sceneryElements/grass.svg";
import React from "react";

type SceneryItem = {
  type: any,
  scale?: number,
}

const availableItems: Record<number, SceneryItem[]> = {
  1: [{type: Tree}, {type: Grass, scale: 0.2}],
  2: [{type: Tree}, {type: BigTree}, {type: Grass, scale: 0.2}],
  3: [{type: Mountains}],
  4: [{type: Mountains}],
};

const heightRanges = {
  1: { min: 20, max: 45 },
  2: { min: 10, max: 30 },
  3: { min: 10, max: 40 },
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
    const element1 = elementSet[getRandom(0, elementSet.length)];
    const SceneryElement1 = element1.type;
    const scale1 = element1.scale || 1;
    const element2 = elementSet[getRandom(0, elementSet.length)];
    const SceneryElement2 = element2.type;
    const scale2 = element2.scale || 1;

    const heightRange = heightRanges[layer];

    const height1 = getRandom(heightRange.min, heightRange.max) * scale1;
    const height2 = getRandom(heightRange.min, heightRange.max) * scale2;

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

  }

  return elements;
};
