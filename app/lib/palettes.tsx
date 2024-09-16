/** Custom palette object */
export type Palette = {
  "--layer-one": string;
  "--layer-two": string;
  "--layer-three": string;
  "--layer-four": string;
  "--bg": string;
};

/**
 * Palette selection
 * 
 * Shout-out to https://colorhunt.co/
 */
export const palettes: Record<string, Palette> = {
  sunset: {
    "--layer-one": "#6A2C70",
    "--layer-two": "#B83B5E",
    "--layer-three": "#F08A5D",
    "--layer-four": "#F9ED69",
    "--bg": "#EC8686",
  },
  midnight: {
    "--layer-one": "#070F2B",
    "--layer-two": "#1B1A55",
    "--layer-three": "#535C91",
    "--layer-four": "#9290C3",
    "--bg": "#9290C3",
  },
  polar: {
    "--layer-one": "#1B262C",
    "--layer-two": "#0F4C75",
    "--layer-three": "#3282B8",
    "--layer-four": "#BBE1FA",
    "--bg": "#3282B8",
  },
  candy: {
    "--layer-one": "#F7418F",
    "--layer-two": "#FC819E",
    "--layer-three": "#FEC7B4",
    "--layer-four": "#FFF3C7",
    "--bg": "#F8B0D8",
  },
  forest: {
    "--layer-one": "#092635",
    "--layer-two": "#1B4242",
    "--layer-three": "#5C8374",
    "--layer-four": "#9EC8B9",
    "--bg": "#9EC8B9",
  },
  dreamland: {
    "--layer-one": "#8E7AB5",
    "--layer-two": "#B784B7",
    "--layer-three": "#E493B3",
    "--layer-four": "#EEA5A6",
    "--bg": "#E493B3",
  },
};
