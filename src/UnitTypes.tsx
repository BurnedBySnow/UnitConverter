import { Unit as ConvertUnit } from "convert-units";

export interface Unit {
  label: string;
  tag: ConvertUnit;
}

export const Length = (): Unit[] => {
  return [
    { label: "Meter", tag: "m" },
    { label: "Kilometer", tag: "km" },
    { label: "Centimeter", tag: "cm" },
    { label: "Millimeter", tag: "mm" },
    { label: "Mile", tag: "mi" },
    { label: "Foot", tag: "ft" },
    { label: "Inch", tag: "in" },
  ];
};

export const Temp = (): Unit[] => {
  return [
    { label: "Celsius", tag: "C" },
    { label: "Kelvin", tag: "K" },
    { label: "Fahrenheit", tag: "F" },
  ];
};

export const Area = (): Unit[] => {
  return [
    { label: "Square Meter", tag: "m2" },
    { label: "Square Kilometer", tag: "km2" },
    { label: "Square Centimeter", tag: "cm2" },
    { label: "Square Millimeter", tag: "mm2" },
    { label: "Hectare", tag: "ha" },
    { label: "Square Mile", tag: "mi2" },
    { label: "Square Foot", tag: "ft2" },
    { label: "Square Inch", tag: "in2" },
    { label: "Acre", tag: "ac" },
  ];
};

export const Volume = (): Unit[] => {
  return [
    { label: "Cubic Meter", tag: "m3" },
    { label: "Cubic Kilometer", tag: "km3" },
    { label: "Cubic Centimeter", tag: "cm3" },
    { label: "Cubic Millimeter", tag: "mm3" },
    { label: "Liter", tag: "l" },
    // { label: "Deciliter", tag: 'dl' },
    { label: "Milliliter", tag: "ml" },
    { label: "Teaspoon", tag: "tsp" },
    { label: "Tablespoon", tag: "Tbs" },
    { label: "Cup", tag: "cup" },
    { label: "Pint", tag: "pnt" },
    { label: "Gallon", tag: "gal" },
  ];
};

export const Weight = (): Unit[] => {
  return [
    { label: "Kilogram", tag: "kg" },
    { label: "Gram", tag: "g" },
    { label: "Milligram", tag: "mg" },
    { label: "Metric Ton", tag: "t" },
    { label: "Pound", tag: "lb" },
    { label: "Ounce", tag: "oz" },
  ];
};
