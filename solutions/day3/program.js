export default function Day(data) {
    let temp = [];
    let sum = 0, sum2 = 0;
    data.forEach(element => {
        const arr = [];
        for (let char of element) arr.push(getPriority(char));
        temp.push(arr);
        sum += partOne(arr.slice());
        if (temp.length % 3 == 0) {
            sum2 += partTwo(temp);
            temp = [];
        }
    });
    console.log(sum);
    console.log(sum2);
}

const partOne = (arr) => {
    const middle = Math.ceil(arr.length / 2);
    const leftArr = arr.splice(0, middle);
    return arr.filter(val => leftArr.indexOf(val) != -1)[0];
}

const partTwo = (arr) => {
    return arr[0].filter(val => arr[1].indexOf(val) != -1 && arr[2].indexOf(val) != -1)[0];
}

const getPriority = (char) => {
    const prio = parseInt(char.charCodeAt(0));
    return (prio >= 97 && prio <= 122 ? prio - 96 : prio - 38); // ascii to prio
}