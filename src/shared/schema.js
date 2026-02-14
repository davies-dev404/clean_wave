import { z } from "zod";

export const insertBookingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  serviceType: z.string().min(1, "Service type is required"),
  date: z.coerce.date(),
  sizeOrWeight: z.string().optional(),
  instructions: z.string().optional()
});

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

