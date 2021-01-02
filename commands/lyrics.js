const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = {
  name: "lyrics",
  aliases: ["ly"],
  description: "Get lyrics for the currently playing song",
  async execute(message, args) {
    if (!args.length) {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) return message.channel.send("There is nothing playing.").catch(console.error);

      let lyrics = null;

      try {
        const name = queue.songs[0].title;
        const array = name.trim().split(" ");
        lyrics = await lyricsFinder(`${array[0]} ${array[1]} ${array[2]} ${array[3]}`, "");
        if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
      } catch (error) {
        lyrics = `No lyrics found for ${queue.songs[0].title}.`;
      }

      let lyricsEmbed = new MessageEmbed()
        .setTitle(`${queue.songs[0].title} — Lyrics`)
        .setDescription(lyrics)
        .setColor(16747679)
        .setTimestamp();

      if (lyricsEmbed.description.length >= 2048)
        lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
      return message.channel.send(lyricsEmbed).catch(console.error);
    } else {

      let lyrics = null;

      try {
        lyrics = await lyricsFinder(args.join(" "), "");
        if (!lyrics) lyrics = `No lyrics found for ${args.join(" ")}.`;
      } catch (error) {
        lyrics = `No lyrics found for ${args.join(" ")}.`;
      }

      let lyricsEmbed = new MessageEmbed()
        .setTitle(`${args.join(" ")} — Lyrics`)
        .setDescription(lyrics)
        .setColor(16747679)
        .setTimestamp();

      if (lyricsEmbed.description.length >= 2048)
        lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
      return message.channel.send(lyricsEmbed).catch(console.error);
    }


  }
};
