import { CommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";
import { getRomUrl } from "../../utils/getRomUrl";
import { folderIds } from "../../config/folderID";

export const GBA: Command = {
  name: "gba",
  description: "Search GBA roms",
  options: [
    {
      name: "name",
      description: "name of the rom you're searching",
      required: true,
      type: 3,
    },
  ],

  //   type: "CHAT_INPUT",
  run: async (client: Client, interaction: CommandInteraction) => {
    const roms = await getRomUrl(
      folderIds.GBA,
      interaction.options.get("name")?.value as string
    );

    roms.forEach(async (content, key) => {
      await interaction.followUp({
        ephemeral: true,
        content,
      });
    });
  },
};

export function getRomSearchingSlashCommand(
  name: string,
  fullname: string,
  id: string,
  nasos: boolean = false
) {
  const command: Command = {
    name: name,
    description: `Search ${fullname} roms`,
    options: [
      {
        name: "name",
        description: "name of the rom you're searching",
        required: true,
        type: 3,
      },
    ],

    //   type: "CHAT_INPUT",
    run: async (client: Client, interaction: CommandInteraction) => {
      const roms = await getRomUrl(
        id,
        interaction.options.get("name")?.value as string
      );

      roms.forEach(async (content, key) => {
        await interaction.followUp({
          ephemeral: true,
          content,
        });
      });
    },
  };
  return command;
}
