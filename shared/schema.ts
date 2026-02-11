import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  location: text("location").notNull(),
  serviceType: text("service_type").notNull(),
  date: timestamp("date").notNull(),
  sizeOrWeight: text("size_or_weight"),
  instructions: text("instructions"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
