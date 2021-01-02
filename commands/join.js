module.exports = {
    name: "join",
    description: "To join the vc",
    aliases: ["j"],
    async execute(message) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            await message.react("👌");
          } else {
            message.reply('You need to join a voice channel first!');
          }
    }
}