import { z } from 'zod';

export const personalSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
});

export const addressSchema = z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    zip: z.string().regex(/^\d{5,}$/, "Zip must be at least 5 digits"),
});

export const accountSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
});
