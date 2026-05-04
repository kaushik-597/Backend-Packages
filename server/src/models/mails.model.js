import mongoose from "mongoose";

const mailSchema = mongoose.Schema(
  {
    to: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    text: {
      type: String,
      default: "",
    },

    html: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },

    messageId: {
      type: String,
      default: null,
    },

    errorMessage: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

export const Mail = mongoose.model("Mail", mailSchema);
