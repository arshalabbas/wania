module.exports = {
    name: "leave",
    description: "To leave the vc",
    aliases: ["dc"],
    async execute(message) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.leave();
            await message.react("👋");
          } else {
            message.reply('You need to join a voice channel first!');
          }
    }
}