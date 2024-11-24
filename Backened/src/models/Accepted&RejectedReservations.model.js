import mongoose, { Schema } from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    ReservationData: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Data = mongoose.model("data", DataSchema);
