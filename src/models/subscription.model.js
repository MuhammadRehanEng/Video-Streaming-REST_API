import mongoose, { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // one who is subscribing
      ref: "User",
    },

    channel: {
      type: Schema.Types.ObjectId, // yeh bhi users hi but yeh wo log jino ne kisi channel ko subscribe kiya hai
      ref: "User",
    },
  },
  { timestamps: true }
);

export default model("Subscription", subscriptionSchema);
