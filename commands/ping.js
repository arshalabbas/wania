module.exports = {
  name: "ping",
  cooldown: 3,
  description: "Show the bot's average ping",
  execute(message) {
    message.channel.send(`📈 Average ping to API: \`${Math.round(message.client.ws.ping)}\` ms`).catch(console.error);
  }
};
