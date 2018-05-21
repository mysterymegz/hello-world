const Discord = require('discord.js');
const config = require('./config.json');
const random = require('./random.js');

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
    
  if (command === 'help') {
      msg.channel.send('Owner: reno(すぐに私を殺す)#5340\nPrefix: $');

   }  
  
  else if (command === 'hi') {
      msg.channel.send("", {file: random.select('hello')});
  }
  
  else if (command === 'highfive') {
      msg.channel.send("", {file: random.select('highfive')});
  } 
    
  else if (command === 'eat') {
      msg.channel.send("", {file:"https://media.giphy.com/media/8XUZ0XauUBnoY/giphy.gif"});
  }
  
  else if(command === 'bed') {
      msg.channel.send("", {file: random.select('bed')});
  }
  
  else if (command === 'slap') {
      msg.channel.send("", {file: random.select('slaps')});
  }
  
  else if (command === 'hug') {
      msg.channel.send("", {file: random.select('hugs')});
  }
  
  else if (command === 'facedesk') {
      msg.channel.send("", {file: random.select('facedesk')});
  }  

  else if (command === 'pat') {
      msg.channel.send("", {file: random.select('pet')});
                                         
  } else {
      return;
  }
});

client.login(process.env.token);
