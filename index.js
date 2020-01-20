require("dotenv").config();

const { readdirSync } = require("fs");
const Discord = require("discord.js");

const client = new Discord.Client();
client.commands = new Map();

const commandFiles = readdirSync("./commands/");
commandFiles.forEach(file => {
    try {
        const command = require(`./commands/${file}`);

        if (command.init) command.init(client);
        client.commands.set(command.help.name, command);

        if (command.help.aliases) {
            command.alias = true;
            command.help.aliases.forEach(alias => client.commands.set(alias, command));
        }
    } catch (exception) {
        console.log(exception);
    }
})

const eventFiles = readdirSync("./events/");
eventFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);

    client.on(eventName, event.bind(null, client));
})


client.login(process.env.DISCORD_AUTH_TOKEN);