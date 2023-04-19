import type { Config } from "drizzle-kit";
import 'dotenv/config';

export default {
    out: ".src/db",
    schema: "./src/db/schema.ts",
    connectionString: process.env.DRIZZLE_URL,
} satisfies Config;