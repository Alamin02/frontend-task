import data from "./data";

function getData({ startingIndex = 0 }) {
    let retirvedData = [];
    for (let i = startingIndex; i < startingIndex + 4; i++) {
        retirvedData.push(data[i]);
    }

    return retirvedData;
}

export default getData;