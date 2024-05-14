import { SlashCommandBuilder } from "discord.js";

export const cooldown = 5;

export const data = new SlashCommandBuilder()
  .setName("quote")
  .setDescription("Posts the given text and author as a nicely formatted quote")
  .addStringOption((option) =>
    option
      .setName("text")
      .setDescription("The text to quote")
      .setRequired(true),
  )
  .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("The user which the quote originated from")
      .setRequired(true),
  );

export const execute = async (interaction) => {
  const text = interaction.options.get("text").value;
  const username = interaction.options.get("user").user.username;

  await interaction.reply(`\`\`\`"${text}"\n  - ${username}\`\`\``);
};
