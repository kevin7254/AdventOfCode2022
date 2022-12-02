export default function Day(data) {
    let num = 0;
    const arr = [];
    data.forEach(element => {
        if (element) {
            num += parseInt(element);
        } else {
            arr.push(num);
            num = 0;
        }
    });
    arr.sort((a, b) => a - b);
    console.log("Part one: " + Math.max(...arr));
    const sum = arr.slice(-3).reduce((acc, val) => acc + val);
    console.log("Part two: " + sum)
}