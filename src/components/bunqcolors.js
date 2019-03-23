export const bunqcolors = [
    "#268347",
    "#32A24B",
    "#71BF45",
    "#8BC65A",
    "#3EB8AD",
    "#3394D7",
    "#2872BB",
    "#1C5C85",
    "#983333",
    "#EE3124",
    "#F88A1F",
    "#FACC32"
];
export const colorpicker = () => {
    const color = bunqcolors[Math.floor(Math.random() * bunqcolors.length)];
    return color;
    }