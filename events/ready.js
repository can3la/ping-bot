module.exports = async (client) => {
    client.user.setActivity(`${process.env.PREFIX}help`, {
        type: "LISTENING"
    });
}