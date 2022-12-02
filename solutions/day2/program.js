export default function Day(data) {
    const outcomes = ['B X', 'C Y', 'A Z', 'A X', 'B Y', 'C Z', 'C X', 'A Y', 'B Z'];
    const outcomesPartTwo = ['B X', 'C X', 'A X', 'A Y', 'B Y', 'C Y', 'C Z', 'A Z', 'B Z'];
    let score = 0;
    let scorePartTwo = 0;
    data.forEach(element => {
        score += (outcomes.indexOf(element) + 1);
        scorePartTwo += (outcomesPartTwo.indexOf(element) + 1);
    });
    console.log("Part one " + score);
    console.log("Part two " + scorePartTwo);
}