export default abstract class arrayOperations {

    static getSum(array: number[]) {
        return array.reduce((accumulator, indexValue) => accumulator + indexValue, 0)
    }
    static getAvg(array: number[]) {
        const sum = arrayOperations.getSum(array)
        return sum / array.length
    }
    static getMax(array: number[]) {
        return Math.max(...array)
    }
    static getMin(array: number[]) {
        return Math.min(...array)
    }
} 