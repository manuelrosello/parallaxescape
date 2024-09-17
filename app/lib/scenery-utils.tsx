import BigTree from "@/app/lib/sceneryElements/bigTree.svg";
import Mountains from "@/app/lib/sceneryElements/mountains.svg";
import Tree from "@/app/lib/sceneryElements/tree.svg";
import Grass from "@/app/lib/sceneryElements/grass.svg";
import React from "react";

/**
 * Item object
 */
type SceneryItem = {
  type: any;
  scale?: number;
};

/**
 * To be improved (!)
 *
 * Dictionary of available renders for each layer
 */
const availableItems: Record<number, SceneryItem[]> = {
  1: [{ type: Tree }, { type: Grass, scale: 0.2 }],
  2: [{ type: Tree }, { type: BigTree }, { type: Grass, scale: 0.2 }],
  3: [{ type: Mountains }],
  4: [{ type: Mountains }],
};

/**
 * Minimum and maximum height values (%) for the elements of each layer
 */
const heightRanges = {
  1: { min: 20, max: 45 },
  2: { min: 10, max: 30 },
  3: { min: 10, max: 40 },
  4: { min: 20, max: 80 },
};

/**
 * Obtains a random number within a range
 *
 * @param min minimum value
 * @param max maximum value
 * @returns Random integer within the given range
 */
const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

/**
 * Generates a given number of random elements for a specific parallax layer
 *
 * @param layer Layer number (1 to 4)
 * @param numElements Amount of elements to be generated
 * @param section First or second section of the infinite scroll
 * @param elements Current element array
 * @returns Element array with the new items appended
 */
export const generateElementsInSection = (
  layer: 1 | 2 | 3 | 4,
  numElements: number,
  section: "first" | "second",
  elements: JSX.Element[]
) => {
  const elementSet = availableItems[layer];

  const positions: number[] = [];

  for (let i = 0; i < numElements; i++) {
    const element = elementSet[getRandom(0, elementSet.length)];
    const SceneryElement = element.type;

    const scale1 = element.scale || 1;
    const heightRange = heightRanges[layer];
    const height = getRandom(heightRange.min, heightRange.max) * scale1;

    const lowerBound = i * (100 / numElements);
    const upperBound = (i + 1) * (100 / numElements);
    let displacementCandidate = getRandom(lowerBound, upperBound);
    while (
      positions.find(
        (p) => Math.abs(p - displacementCandidate) < 100 / numElements / 2
      )
    ) {
      displacementCandidate = getRandom(lowerBound, upperBound);
    }
    const displacement = displacementCandidate;
    positions.push(displacement);

    elements.push(
      <SceneryElement
        key={`layer${layer}-el${i + 1}-${section}`}
        className={`parallax-element pe-layer-${section}`}
        style={{
          height: height + "vh",
          marginLeft: displacement + "%",
        }}
      ></SceneryElement>
    );
  }

  return elements;
};

/**
 * Generates a given number of random elements for a specific parallax layer
 *
 * @param layer Layer number (1 to 4)
 * @param numElements Amount of elements to be generated
 * @returns JSX elements for the DOM
 */
export const generateElements = (layer: 1 | 2 | 3 | 4, numElements: number) => {
  let elements: JSX.Element[] = [];
  elements = generateElementsInSection(layer, numElements, "first", elements);
  elements = generateElementsInSection(layer, numElements, "second", elements);

  return elements;
};
