module.exports = async (client, message) => {
    if (message.author.bot) return undefined;
    if (message.channel.type === "dm") return undefined;
    if (!message.content.startsWith(process.env.PREFIX)) return undefined;

    const inputs = message.content
        .slice(process.env.PREFIX.length)
        .trim().split(/ +/g);
    const key = inputs.shift().toLowerCase();

    const command = client.commands.get(key);
    if (!command) return;
    command.run(client, message, inputs);
}