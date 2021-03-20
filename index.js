const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODIyNjE5MjkxOTU3OTg1MzAx.YFU56g.WTRsOUDB1t78hXyh_-YWMvOeoVI');
