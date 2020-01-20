module.exports = {
    run: async function (client, message) {
        const response = await message.channel.send("Ping?");
        const latency = {
            server: response.createdTimestamp - message.createdTimestamp + 'ms',
            api: Math.round(client.ping) + 'ms'
        }
        message.channel.send(`Pong! Server latency ${latency.server}. API latency ${latency.api}.`);
    },
    get help () {
        return {
            name: "ping",
            // aliases: [],
            category: "basic",
            description: "Returns the server latency and api latency",
            usage: `${process.env.PREFIX}ping`
        }
    }
}