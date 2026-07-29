import { Schema, model, models } from "mongoose";

const ProductEnquirySchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    subcategory: {
      type: String,
      required: true,
    },

    product: {
      type: String,
      required: true,
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

export default models.ProductEnquiry ||
  model("ProductEnquiry", ProductEnquirySchema);