import { google } from "googleapis";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const credentials = JSON.parse(process.env.GOOGLE_AUTH as string);
const scopes = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.JWT(
  credentials.client_email,
  undefined,
  credentials.private_key,
  scopes
);

export const drive = google.drive({ version: "v3", auth });
