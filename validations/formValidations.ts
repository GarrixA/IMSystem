import { z } from "zod";

export const borrowerSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  nationalId: z.string().min(6, "National ID must be at least 6 digits"),
  email: z.string().email("Invalid email format"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  residenceAddress: z.string().min(5, "Address must be at least 5 characters"),
  assurerName: z.string().min(3, "Assurer Name must be at least 3 characters"),
  assurerContact: z
    .string()
    .min(10, "Assurer Contact must be at least 10 digits"),
  borrower: z.string().nonempty("Please select an item"),
});

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone_number: z
      .string()
      .min(10, "Phone number should be at least 10 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    password: z.string().min(6, "Password should have at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password should have at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
