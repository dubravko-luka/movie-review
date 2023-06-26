import { IGoogleDriveConfig } from "@/types/interfaces";

export const googleDriveConfig: IGoogleDriveConfig = {
  clientId: process.env.NEXT_PUBLIC_GD_CLIENT_ID || "820336405185-u2ga7e751a4ruejcd9kneiohrmh0348j.apps.googleusercontent.com",
  clientSecret: process.env.NEXT_PUBLIC_GD_CLIENT_SECRET || "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",
  redirectUrl: process.env.NEXT_PUBLIC_GD_REDIRECT_URL || "https://developers.google.com/oauthplayground",
  refreshToken: process.env.NEXT_PUBLIC_GD_REFRESH_TOKEN || "1//04mOIN6tLd1cECgYIARAAGAQSNwF-L9Irc3zGt2RUT_ww3CMULD6LerOcPmdNACP6sS7aKJwyTc1vKgyCLUNEKRSA7fGM3L3QBNk",
} 