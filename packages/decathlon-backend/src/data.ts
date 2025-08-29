import { Product, Customization } from "./types.ts";

export const maillots: Product[] = [
  {
    id: "adidas",
    brand: "ADIDAS",
    name: "Adidas",
    small_description: "T-Shirt ADIDAS red (MAX)",
    description:
      "Our football designers have developed this VIRALTO Wavy football jersey, for your training sessions and matches, with a new wavy design!",
    sport: "football",
    family: "t-shirt",
    code: "8958036",
    in_stock: true,
    price: 29.99,
    link: "",
  },
  {
    id: "arena",
    brand: "ARENA",
    name: "Arena",
    small_description: "Football t-shirt ARENA red",
    description:
      "Designed for the professional football player looking for excellent control and precision for better performance.",
    sport: "football",
    family: "t-shirt",
    code: "8736274",
    in_stock: true,
    price: 55.0,
    link: "",
  },
  {
    id: "unisport",
    brand: "UNISPORT",
    name: "Unisport",
    small_description: "Football t-shirt UNISPORT red",
    description:
      "Now you can take a piece of Premier League greatness with you, wherever you play.",
    sport: "football",
    family: "t-shirt",
    code: "2041a260",
    in_stock: true,
    price: 40.0,
    link: "",
  },
];

export const customizations: Customization[] = [
  {
    id: "name",
    name: "Marking",
    description:
      "Marking personalizes your textiles with a logo, message or visual, using different techniques adapted to your needs.",
    delay: "1-2 days",
    price: 25,
  },
  {
    id: "number",
    name: "Embroidery",
    description:
      "An elegant and durable finish: embroidery gives relief and character to your textiles, perfect for a premium look.",
    delay: "1-2 days",
    price: 20,
  },
  {
    id: "badge",
    name: "Sublimation",
    description:
      "Brilliant and long-lasting visuals thanks to sublimation: high-definition printing directly onto the textile, ideal on light polyester.",
    delay: "2-3 days",
    price: 30,
  },
];

export const plots: Product[] = [
  {
    id: "csy-set",
    brand: "CSY",
    name: "CSY Plastic (SET)",
    small_description: "Soft cup - Pack of 40 multi-colored",
    description:
      "This set of cones is good for soft training, and multi-team (4 colors).",
    sport: "football",
    family: "cone",
    code: "8943901",
    in_stock: true,
    price: 11.99,
    link: "",
  },
  {
    id: "csy",
    brand: "CSY",
    name: "CSY Plastic",
    small_description: "Extra soft cone 18 cm - Yellow",
    description: "Good for any intensive training. Resistant.",
    sport: "football",
    family: "cone",
    code: "8958036",
    in_stock: true,
    price: 8.5,
    link: "",
  },
  {
    id: "kipsta",
    brand: "KIPSTA",
    name: "Kipsta",
    small_description: "Kipsta cone - Modular kit",
    description:
      "Designed for the professional football player looking for intensive training.",
    sport: "football",
    family: "cone",
    code: "8736274",
    in_stock: true,
    price: 25.0,
    link: "",
  },
];
