import data from "./data";

function getData({ startingIndex = 0 }) {
    let retrievedData = [];

    for (let i = 0; i < 4; i++) {
        retrievedData.push(data[startingIndex + i]);
    }

    return retrievedData;
}

export default getData;