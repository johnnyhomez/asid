/**
 * Site Configuration
 * 
 * This file contains the base URL for the site.
 * Update this when deploying to different environments.
 */

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://johnnyhomez.github.io/asid",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
} as const;
