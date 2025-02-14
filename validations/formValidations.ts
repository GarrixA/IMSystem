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
