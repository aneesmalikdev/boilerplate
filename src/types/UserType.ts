import { Document } from "mongoose";

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
}

export interface UserType extends Document { 
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    status: 'active' | 'inactive' | 'pending'
    dob: Date
    profile: string;
}