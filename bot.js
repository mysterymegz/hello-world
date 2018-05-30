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
   
  else if (command ==='info') {
      var info = new Discord.RichEmbed()
      .setTitle('Bot Commands ')
      .addField('Owner', 'mysterymegz')
      .addField('Prefix', '$')
      .addField('Commands', 'slap, facedesk, ping, hug, eat, bed, pat, dance, highfive, hi, swat, hide')
      .setColor(0x3958D0);
      msg.channel.sendEmbed(info);
  } 
  
  if (command === 'help') {
      msg.channel.send('Owner: reno(すぐに私を殺す)#5340\nPrefix: $');
  }
   
  else if (command === 'hi') {
      msg.channel.send("", {file: random.select('./textfile/hello')});
  }
  
  else if (command === 'dance') {
      msg.channel.send("", {file: random.select('./textfile/dance')});
  }
  
   else if (command === '8ball') {
      msg.channel.send(random.select('./textfile/8ball');
  }
  
  else if (command === 'highfive') {
      msg.channel.send("", {file: random.select('./textfile/highfive')});
  } 
    
  else if (command === 'eat') {
      msg.channel.send("", {file:"https://media.giphy.com/media/8XUZ0XauUBnoY/giphy.gif"});
  }
  
  else if(command === 'bed') {
      msg.channel.send("", {file: random.select('./textfile/bed')});
  }
  
  else if (command === 'slap') {
      msg.channel.send("", {file: random.select('./textfile/slaps')});
  }
  
  else if (command === 'swat') {
      msg.channel.send("", {file: random.select('./textfile/newspaper')});
  }
  
  else if (command === 'hug') {
      msg.channel.send("", {file: random.select('./textfile/hugs')});
  }
  
  else if (command === 'hide') {     
     msg.channel.send("", {file: random.select('./textfile/hide')});
  }
  
  else if (command === 'facedesk') {
      msg.channel.send("", {file: random.select('./textfile/facedesk')});
  }
    
  else if (command === 'pat') {
      msg.channel.send("", {file: random.select('./textfile/pet')});
      
  } else {
      return;
  }
});

client.login(process.env.token);
