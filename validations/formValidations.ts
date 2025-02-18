import { z } from "zod";

export const borrowerSchema = z.object({
  full_name: z.string().min(3, "Full Name must be at least 3 characters"),
  national_id: z.string().min(6, "National ID must be at least 6 digits"),
  email: z.string().email("Invalid email format"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  residance_address: z.string().min(5, "Address must be at least 5 characters"),
  assurer_name: z.string().min(3, "Assurer Name must be at least 3 characters"),
  assurer_contact: z
    .string()
    .min(10, "Assurer Contact must be at least 10 digits"),
  itemId: z.string().nonempty("Please select an item"),
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
