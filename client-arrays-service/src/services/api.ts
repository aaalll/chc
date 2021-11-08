import axios from 'axios';

export const logReversedArray = async (reversedArray: number[]) => {
    try {
        await axios.post(`${process.env.LOG_SERVICE_URL}/log`, { reversedArray });
        return
    }
    catch (err) {
        console.log('Error', err);
        return
    }
}