export default function Day(data) {
    let temp = [];
    let sum = 0, sum2 = 0;
    data.forEach((element, index) => {
        const arr = [];
        for (let char of element) arr.push(getPriority(parseInt(char.charCodeAt(0))));
        temp.push(arr);
        sum += partOne(arr.slice());
        if ((index != 0) && (temp.length % 3 == 0)) {
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

const getPriority = (e) => {
    return (e >= 97 && e <= 122 ? e - 96 : e - 38); // ascii to prio
}