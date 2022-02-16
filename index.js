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

client.login('OTQxMzM4ODc1NDkyNjk2MTU1.YgzWZw.8Q-aAePrILCMNTLw-_yfhd1-6Qw');
