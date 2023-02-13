import { Message } from "discord.js";
export function checkCommand(name, msg: Message) {
  if (name === "") {
    msg.channel.send("I think you forgot the name of the game, try again");
    return false;
  } else return true;
}
