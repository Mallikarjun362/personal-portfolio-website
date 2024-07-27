import { Schema } from "mongoose";

interface IAdvertisement {}

const advertisementSchema = new Schema<IAdvertisement>({});

export default advertisementSchema;
