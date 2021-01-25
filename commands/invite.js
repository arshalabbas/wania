const { MessageEmbed } = require('discord.js');
const emojies = ["🥰", "🎉", "💖", "💞", "💓", "💕", "💘"];
module.exports = {
  name: "invite",
  description: "Send bot invite link",
  async execute(message) {
    const invite = `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=37154112&scope=bot`;
    const wInvite = "https://discord.com/oauth2/authorize?client_id=794170239737921536&permissions=37154112&scope=bot"
    const server = "https://discord.gg/p5MkwJVwUJ";
    const inviteEmbed = new MessageEmbed()
      .setTitle("Invite Us!")
      .addFields(
        { name: "Wania Music", value: `[Click here to invite...](${invite})` },
        { name: "Wania Radio", value: `[Click here ti invite...](${wInvite})` },
        { name: "Support Server", value: `[Click here to join...](${server})` }
      )
      .setColor(16747679)
      .setImage("https://i.ibb.co/Rj4LnHc/wania-together.gif")
      .setDescription("I hope we can be entertain to you in your server!")
      .setThumbnail("https://i.ibb.co/TB5ymRh/wania-radio.png");
    const emoji = emojies[Math.floor(Math.random() * emojies.length)];
    await message.react(emoji);
    return message.member
      .send(inviteEmbed)
      .catch(console.error);
  }
};
