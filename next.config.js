/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
};

if (process.env.NEXT_PUBLIC_IGNORE_WARNINGS === "true") {
    process.env.NODE_NO_WARNINGS = "1";
}

module.exports = nextConfig;
