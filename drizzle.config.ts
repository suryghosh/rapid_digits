import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  driver: "postgresql",  // Use 'pg' or 'postgresql' for PostgreSQL
  dbConnection: {
    connectionString: process.env.DATABASE_URL!,
  },
};

export default config;


