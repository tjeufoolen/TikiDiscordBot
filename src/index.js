import { Collection, Client, Events, GatewayIntentBits } from "discord.js";
import { getCommands } from "./commands/commands.js";
import "dotenv/config";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
(await getCommands()).forEach((command) => {
  client.commands.set(command.data.name, command);
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    const errorOptions = {
      content: "There was an error while executing this command!",
      ephemeral: true,
    };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(errorOptions);
    } else {
      await interaction.reply(errorOptions);
    }
  }
});

client.login(process.env.TOKEN);
