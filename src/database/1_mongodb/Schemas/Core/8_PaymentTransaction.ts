import { Schema } from "mongoose";

interface IPaymentTransaction {}

const paymentTransactionSchema = new Schema<IPaymentTransaction>({});

export default paymentTransactionSchema;
