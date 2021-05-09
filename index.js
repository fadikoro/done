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

client.login('ODM3OTc0Nzg5NDY4NTg1OTk1.YI0W1g.bCw_nzpYv6Sc8dcAeIiM1kJiNr8');
