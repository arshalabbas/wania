const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    const invite = `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=37154112&scope=bot`;
    const server = 'https://discord.gg/p5MkwJVwUJ';

    let helpEmbed = new MessageEmbed()
      .setAuthor(message.client.user.username, message.client.user.displayAvatarURL())
      .setTitle(`${message.client.user.username} Commands`)
      .setDescription("List of all commands")
      .setColor(16747679);

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });
    helpEmbed.addField("Supports Us",`[Invite Me](${invite})\n[Join Support Server](${server})`)
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
