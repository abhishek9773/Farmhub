import { z } from "zod";

export const notificationType = z.enum(
  ["rental", "transaction", "review", "system"],
  { message: "notification type missmatch" }
);
export const NotificationSchema = z.object({
  userId: z.string().uuid("userId must be a Users UUID"),
  message: z.string(),
  type: notificationType,
  isRead: z.boolean().default(false),
});
