import { z } from "zod";

const StatusEnum = z.enum(["peding", "completed", "canceled"], {
  message: "invalid status",
});
export const TransactionsSchema = z.object({
  rantalPeriodId: z.string().uuid("rantal period id  must be valid UUID"),
  amount: z
    .number()
    .min(0, "Amount must be a positive number")
    .max(99999999.99, "Amount exceeds maximum precision"),
  status: StatusEnum,
  transationDate: z
    .string()
    .datetime({ offset: true })
    .default(() => new Date().toISOString()),
  paymentMethod: z.string(),
});
