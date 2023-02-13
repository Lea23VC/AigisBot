import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import ready from "./listeners/ready";
import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
dotenv.config();

const token = process.env.DISCORD_TOKEN; // add your token here
console.log("token: ", token);
console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);
client.login(token);
