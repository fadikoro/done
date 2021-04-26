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

client.login('ODM2MDM1Njc2MTI2NDQ1NTY5.YIYI5Q.zbwtEqOQA07ojzA_KLvki0Mx8K4');
