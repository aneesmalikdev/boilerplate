import { model, Schema } from "mongoose";
import { UserRole, UserType } from "../types/UserType.js";

const userSchema = new Schema<UserType>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: UserRole, default: UserRole.USER },
    status: { type: String, required: true },
    dob: { type: Date, required: true },
    profile: { type: String, required: true },
  },
  {
    timestamps: true,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const UserModel = model("user", userSchema);
