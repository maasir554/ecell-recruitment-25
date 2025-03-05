/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASE_KEY: process.env.SUPABASE_KEY,
        GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
        GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID,
        SHEET_RANGE: process.env.SHEET_RANGE,
    },
};

if (process.env.NEXT_PUBLIC_IGNORE_WARNINGS === "true") {
    process.env.NODE_NO_WARNINGS = "1";
}

module.exports = nextConfig;
