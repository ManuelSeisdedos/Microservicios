import dotenv from 'dotenv';
dotenv.config()
const MONGO_URI = process.env.MONGO_URI;

export default {
    MONGO_URI
}