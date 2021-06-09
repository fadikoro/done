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

client.login('NzY1OTYyMTk2NjE3OTIwNTI0.X4cb4g.EuhSvxZy944zQvdaBNUmywFWMOU');
