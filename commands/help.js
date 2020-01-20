module.exports = {
    run: (client, message) => {
        let embed = {
            color: 0xB1103C,
            title: 'Lista de comandos do ping.bot',
            url: 'https://github.com/ogustaflor/ping.bot',
            description: 'Todos os comandos disponíveis',
            fields: []
        }

        client.commands.forEach(command => {
            if (command.alias) return
            embed.fields.push({
                name: `**${process.env.PREFIX}${command.help.name}**`,
                value: `**Description**: ${command.help.description}\n**Usage**: ${command.help.usage}`
            });
        });

        message.channel.send({ embed: embed });
    },
    help: {
        name: 'help',
        // aliases: [],
        category: 'basic',
        description: 'Show all commands',
        usage: `${process.env.PREFIX}help`
    }
}