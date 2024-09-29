import { unstable_noStore as noStore } from "next/cache";
import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { authOptions } from "snapparoo//auth";
import { db, SubscriptionPlan } from "snapparoo//db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const updateUserNameSchema = z.object({
  name: z.string(),
  userId: z.string(),
});
const insertCustomerSchema = z.object({
  userId: z.string(),
});

export const customerRouter = createTRPCRouter({
  updateUserName: protectedProcedure
    .input(updateUserNameSchema)
    .mutation(async ({ input }) => {
      const { userId, name } = input;
      const session = await getServerSession(authOptions);
      if (!session?.user || userId !== session?.user.id) {
        return { success: false, reason: "no auth" };
      }
      // Mock update operation
      await db.query('UPDATE User SET name = $1 WHERE id = $2', [name, userId]);
      return { success: true, reason: "" };
    }),

  insertCustomer: protectedProcedure
    .input(insertCustomerSchema)
    .mutation(async ({ input }) => {
      const { userId } = input;
      // Mock insert operation
      await db.query('INSERT INTO Customer (authUserId, plan) VALUES ($1, $2)', [userId, SubscriptionPlan.FREE]);
      return { success: true };
    }),

  queryCustomer: protectedProcedure
    .input(insertCustomerSchema)
    .query(async ({ input }) => {
      noStore();
      const { userId } = input;
      console.log("userId:", userId);
      
      // Mock query operation
      const result = await db.query('SELECT * FROM Customer WHERE authUserId = $1', [userId]);

      // Return dummy data if no result (which will always be the case with our mock db)
      return result[0] || {
        id: "mock-customer-id",
        authUserId: userId,
        plan: SubscriptionPlan.FREE,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }),
});
