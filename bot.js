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
  
  else if (command === 'headache' ) {
      msg.channel.send('Drink water');
      
  } 
   
  else if (command === 'eat') {
      msg.channel.send("", {file:"https://media.giphy.com/media/8XUZ0XauUBnoY/giphy.gif"});
  }
  
  else if (command === 'slap') {
      msg.channel.send("", {file:"https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif"});
  }
  
  else if (command === 'hug') {
      msg.channel.send("", {file:"random.select"('hugs')});
    
  } else {
      return;
  }
});

client.login(process.env.token);
