import dotenv from 'dotenv';
dotenv.config()

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI)

export default {
    MONGO_URI
}