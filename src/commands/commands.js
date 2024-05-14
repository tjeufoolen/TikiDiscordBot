import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

export const getCommands = async () => {
  const commands = [];

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const commandFoldersPath = __dirname;
  const commandFolders = fs
    .readdirSync(commandFoldersPath)
    .filter((entry) => fs.lstatSync(path.join(__dirname, entry)).isDirectory());

  for (const commandFolder of commandFolders) {
    const commandsPath = path.join(commandFoldersPath, commandFolder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));

    for (const commandFile of commandFiles) {
      const filePath = path.join(commandsPath, commandFile);
      const command = await import(filePath);

      if ("data" in command && "execute" in command) {
        commands.push(command);
      } else {
        console.log(
          `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
        );
      }
    }
  }

  return commands;
};
