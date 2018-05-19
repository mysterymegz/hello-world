const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
  console.log(`Loffed in as $client.user.tag}`);
  client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !==0) return;
  
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === 'ping') {
      msg.channel.send('Pong!');
  } else {
      return;
  }
});

client.login(process.env.token);
