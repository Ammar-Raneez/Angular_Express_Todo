import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  // Limit a specific IP to 100 requests in 15 minutes
  windowMs: 15 * 60 * 1000,
  limit: 1,

  // Combined rate limit header
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
