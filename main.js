import readData, { fileExists } from "./helper.js";

if (process.argv[2]) {
    console.log("Running day " + process.argv[2] + "\n");

    const day = `day${process.argv[2]}`;
    const path = `./solutions/${day}/program.js`;

    try {
        if (fileExists(path)) {
            console.log("Found", path);
            const data = await readData(day);
            const { default: Day } = await import(path);

            new Day(data);
        }
    } catch (error) {
        console.log(error);
    }

} else {
    console.error("No day specified. Run like this: node main.js 1");
    process.exit(1);
}