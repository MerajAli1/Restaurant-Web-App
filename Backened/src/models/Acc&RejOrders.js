import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    OrderData: {
      type: Schema.Types.ObjectId,
      ref: "checkout",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", OrderSchema);
