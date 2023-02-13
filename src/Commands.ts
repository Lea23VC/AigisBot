import { Command } from "./Command";
import { getRomSearchingSlashCommand as getCommand } from "./commands/roms/romSearching";
import { gamesConfig } from "./config/games";

const commands = gamesConfig.map(({ fullname, name, id, nasos }) => {
  return getCommand(name, fullname, id, nasos);
});

export const Commands: Command[] = commands;
