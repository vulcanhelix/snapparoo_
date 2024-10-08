import { unstable_noStore as noStore } from "next/cache";

import { db } from "snapparoo//db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  mySubscription: protectedProcedure.query(async (opts) => {
    noStore();
    const userId = opts.ctx.userId as string;
    const customer = await db
      .selectFrom("Customer")
      .select(["plan", "stripeCurrentPeriodEnd"])
      .where("authUserId", "=", userId)
      .executeTakeFirst();

    if (!customer) return null;
    return {
      plan: customer.plan,
      endsAt: customer.stripeCurrentPeriodEnd,
    };
  }),
});
