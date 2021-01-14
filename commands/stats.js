const os = require('os');

module.exports = {
    name: "stats",
    description: "(You can't use this command)",
    execute(message) {
        if(!message.author.id === '751736021661778004') return;
        message.delete({ timeout: 2000 });
        message.channel.send("Loading...").then(msg => {
            setInterval(() => {
                const ping = Math.round(message.client.ws.ping);
                var finalPing;
                if(ping > 149) {
                    finalPing = `- Bot Latency: ${ping} ms`;
                } else {
                    finalPing = `+ Bot Latency: ${ping} ms`;
                }

                const serverCount = message.client.guilds.cache.size;
                let seconds = Math.floor(message.client.uptime / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);

                seconds %= 60;
                minutes %= 60;
                hours %= 24;

                var cpu = os.cpus();
                var tMem = (os.totalmem() / 1024) / 1024;
                var fMem = (os.freemem() / 1024) / 1024;
                var uMem = ((os.totalmem() - os.freemem()) / 1024) / 1024;

                msg.edit(`
\`\`\`diff
${message.client.user.username} Stats

${finalPing}
! Active in ${serverCount} servers.
! Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.

=====================

System Stats

- CPU
! CPU: ${cpu[0].model}
! CPU Speed: ${cpu[0].speed / 1000} GHz

- Memory
! Total Memory: ${parseInt(tMem)} MB
! Used Memory:  ${parseInt(uMem)} MB
! Free Memory:  ${parseInt(fMem)} MB

- Platform
! OS: ${os.type()}
! Version: ${os.version()}
\`\`\`
                `);
            }, 1000);
        });
    }
}