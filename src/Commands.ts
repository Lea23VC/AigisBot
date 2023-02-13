import { Command } from "./Command";
import { getRomSearchingSlashCommand as getCommand } from "./commands/roms/romSearching";
import { folderIds } from "./config/folderID";

export const Commands: Command[] = [
  getCommand("ps2", "PlayStation 2", folderIds.PS2),
];
