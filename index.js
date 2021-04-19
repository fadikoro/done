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

client.login('ODMzMjk3Mzg5NzIwMzA1NzA1.YHwSqw.XrNWe7B6lRJqAY5EV_-yv1N_Kng');
