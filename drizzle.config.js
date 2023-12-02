import { Config } from "drizzle-kit";

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};
