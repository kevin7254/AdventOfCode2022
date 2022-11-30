import fs from 'fs';

export default async function readData(day) {
    const separator = '\n';
    const data = await fs.readFileSync(`./solutions/${day}/input.txt`, 'utf8');
    return data.split(separator);
}

export async function fileExists(path) {
    try {
        const result = await fs.existsSync(path)
        return result;
    } catch (error) {
        return false;
    }
}