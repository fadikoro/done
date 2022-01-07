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

client.login('mfa.nEzpjJwsPR8Y3j5PIDxRBOn-UxNpvaB4sP6ahkA_tXtJ7Jtlm23ceDd-Azet8rIvtPBlS-T7xneemRqLcDe2');
