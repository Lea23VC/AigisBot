import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import ready from './listeners/ready';
import { Client, ClientOptions } from 'discord.js';
import interactionCreate from './listeners/interactionCreate';
dotenv.config();

console.log('Starting bot...');

const token = process.env.DISCORD_TOKEN; // add your token here

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);
client.login(token);

export { client };
