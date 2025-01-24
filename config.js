require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Mercy", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "237695269955", // Your WhatsApp number

    mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Cameroon", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "Jessica.✝️", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Mercy", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Yaoundé", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "false", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "false", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdyYXdMNHY2UC92Ujk4UE1UMG5tR1FzK01GTkxSTkdoU1FPMTA3aFFsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2JMVUNoay9PTXNKaUV0UDM3NkJFa3BSN2lzd2JsOTBoTEZuYXhNNFlIVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFS3JGNjAxaFFMaTBuSENGMFNRckI2SDBYUkpVU21JZkJ0VUJMLzFvT200PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NVZmRWRPK2w0UlZPR3BOOGcrN3Y5YytRb29iUWZLaExpTWVXZ25rRmp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCZHpIZnl4V0xoVm1hRDBTbnpsQjF0dnZQNVlxdy9wR09jclZSdmpmMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRVN2hqR040eVk0RFo3d01uTHFrRjI3b0dVMVBXdjNPblFXTTdLYVlqazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VNdlgvaGYxOUxObG9UR2xjQ2xDV1VSV0t0RkVUeDhiZHp3a0VJdHozZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFRRS1kvTG0rOFJwOC9kdGpqVExVL0RLYXQ1Y1NXYUFZRk1ZZXM0WUJ4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFVR0FhL0oybytyQm4wclovb3dycXAvMUFoRUM3MldOQWRkYVJ0VXk4bWpFOW1XWi9wMkY2ZjB1S3FRVVZnTnNsVGxWQ0dDMGlyNFlENDRnekNoUGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJNRG1ySVF5S3c5NUdTYndVV3Y5N3k4VW5kSzhUdUFYUHdNNDAwZ0x1NGZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2NDFMNUs1TSIsIm1lIjp7ImlkIjoiMjM3Njk1MjY5OTU1OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIzMjcwNjc2MzIxOTAwNjoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXY4OTJ3UTlLUFF2QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK0pDKzFXdURabktSWFJFajY2Y3VhMGVlNkhiQnBFcXRiU1VVNGlOdE5BYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiczE1MzYraUswRUtxS25xTHJtR0hiZ0wrcFpSQnNHcXVmRlQrL1l0NEdQRnViRmNqdk8yZkFEOEVHYkh3QU1uRFgvVDMyMFYwVUR4VlM5WVR2cDR4QXc9PSIsImRldmljZVNpZ25hdHVyZSI6InhrNWhieFZLV25YRGJFT1N3UmRPUndKMW9KN00zM0tyVW40dnE1dFlsV3hxa3dDYjNheWZiS1I5WThyOWZiVHcyc0JWbkY4YXYwKzhqRGMrY2NpMWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk1MjY5OTU1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmlRdnRWcmcyWnlrVjBSSSt1bkxtdEhudWgyd2FSS3JXMGxGT0lqYlRRSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NzU3MTg1LCJsYXN0UHJvcEhhc2giOiJubTNCYiJ9", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
