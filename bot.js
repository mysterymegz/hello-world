const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(config.prefix) !==0) return;
  
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === 'ping') {
      msg.channel.send('Pong!');
  }
  
  else if (command === 'cry' ) {
      msg.channel.send('no cry');
  } 
   
  else if (command === 'eat') {
      msg.channel.send("", {file:"https://media.giphy.com/media/8XUZ0XauUBnoY/giphy.gif"});
  }
  
  else if (command === 'eat') {
      msg.channel.send("", {"https://m.popkey.co/f1c207/V0J6a.gif"});
    
  } else {
      return;
  }
});

client.login(process.env.token);
