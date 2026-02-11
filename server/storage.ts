import { bookings, contactInquiries, type InsertBooking, type Booking, type InsertContact, type ContactInquiry } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createBooking(booking: InsertBooking): Promise<Booking>;
  createContactInquiry(inquiry: InsertContact): Promise<ContactInquiry>;
}

export class DatabaseStorage implements IStorage {
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }

  async createContactInquiry(insertInquiry: InsertContact): Promise<ContactInquiry> {
    const [inquiry] = await db
      .insert(contactInquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }
}

export const storage = new DatabaseStorage();
