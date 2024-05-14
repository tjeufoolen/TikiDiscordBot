import { REST, Routes } from "discord.js";
import { getCommands } from "./commands/commands.js";
import "dotenv/config";

const commands = (await getCommands()).map((command) => command.data.toJSON());

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.TOKEN);

try {
  console.log(
    `Started refreshing ${commands.length} application (/) commands.`,
  );

  // The put method is used to fully refresh all commands in the guild with the current set
  const data = await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID,
    ),
    { body: commands },
  );

  console.log(`Successfully reloaded ${data.length} application (/) commands.`);
} catch (error) {
  console.error(error);
}
