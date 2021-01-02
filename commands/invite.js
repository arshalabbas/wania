const { MessageEmbed } = require('discord.js');
const emojies = ["🥰", "🎉", "💖", "💞", "💓", "💕", "💘"];
module.exports = {
  name: "invite",
  description: "Send bot invite link",
  async execute(message) {
    const invite = `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=37154112&scope=bot`;
    const server = "https://discord.gg/p5MkwJVwUJ";
    const inviteEmbed = new MessageEmbed()
    .setTitle("Invite me!")
    .addField("Supports Us",`[Invite Me](${invite})\n[Join Support Server](${server})`)
    .setColor(16747679)
    .setDescription("I hope I can be entertain to you in your server!")
    .setThumbnail("https://i.ibb.co/W6hK79j/mimo-logo.png");
    const emoji = emojies[Math.floor(Math.random() * emojies.length)];
    await message.react(emoji);
    return message.member
      .send(inviteEmbed)
      .catch(console.error);
  }
};
