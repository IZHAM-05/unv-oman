import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      default: "",
      trim: true,
    },

    productCategory: {
      type: String,
      required: true,
    },

    projectScope: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    agreeToTerms: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Contact || model("Contact", ContactSchema);