export default function Day(data) {
    let score = 0;
    let scoreTwo = 0;

    data.forEach(element => {
        const pairs = element.split(",");

        const pairOne = pairs[0].split("-");
        const pairTwo = pairs[1].split("-");

        score += contains(pairOne, pairTwo);

        scoreTwo += containsTwo(pairOne, pairTwo);
    });
    console.log(score);
    console.log(scoreTwo);
}

const contains = (pairOne, pairTwo) => {
    if ((parseInt(pairOne[0]) <= parseInt(pairTwo[0]) && parseInt(pairTwo[1]) <= parseInt(pairOne[1])) || (parseInt(pairTwo[0]) <= parseInt(pairOne[0]) && parseInt(pairOne[1]) <= parseInt(pairTwo[1]))) return 1;

    return 0;
}

const containsTwo = (pairOne, pairTwo) => {
    const arr = [];

    for(let i = parseInt(pairOne[0]); i<= parseInt(pairOne[1]);i++) arr.push(i);

    for(let i = parseInt(pairTwo[0]); i<= parseInt(pairTwo[1]);i++) arr.push(i);



    return ((new Set(arr)).size !== arr.length) ? 1 : 0;
}