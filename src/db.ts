import mongoose from 'mongoose';
import { dbname , dburi} from './constants';

// Connect to MongoDB
const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${dburi}${dbname}`)
        console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection FAILED",error);
        process.exit(1);
    }
}
export default ConnectDB;