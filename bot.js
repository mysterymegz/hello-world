const Discord = require('discord.js');
const config = require('./config.json');
const random = require('./random.js');

const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity(config.defaultActivity);
});
const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
 
Music.start(client, {
  youtubeKey:'AIzaSyA2IUN7CZg1t5KZNqNETDME6kEoq801aiI'
});
 
client.login("token");


client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.content.indexOf(config.prefix) !==0) return;
  
	const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
	if (command === 'ping') {
		msg.channel.send('Pong Ping Pong!:monkey_face: ');
	}
   
	else if (command ==='info') {
		var info = new Discord.RichEmbed()
		.setTitle('Bot Commands ')
		.addField('Owner', 'mysterymegz')
		.addField('Prefix', '$')
		.addField('Commands', 'slap, facedesk, ping, hug, bed, pat, poke, dance, highfive, hi, swat, hide, 8ball, cold, love, puns')
		.setColor(0x3958D0);
		msg.channel.sendEmbed(info);
	} 
  
	else if (command === 'help') {
		msg.channel.send('Owner: reno(すぐに私を殺す)#5340\nPrefix: $');
	}
		
	else if (command === 'cold') {
               msg.channel.send("", {file: random.select('./textfile/cold')});
        }
		
	else if (command === 'f') {
               msg.channel.send("", {file: random.select('./textfile/foff')});
	}
	
	else if (command === 'dab') {
               msg.channel.send("", {file: random.select('./textfile/dab')});
	}
		
	else if (command === 'puns') {
		msg.channel.send(random.select('./textfile/puns'));
	}
	
	else if (command === 'love') {
		msg.channel.send("", {file: random.select('./textfile/love')});
	}
	
	else if (command === '8ball') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to ask a question!')
		} else {
			msg.channel.send(random.select('./textfile/8ball'));
		}
	}
  
	else if (command === 'hi') {   
		msg.channel.send("", {file: random.select('./textfile/hello')});	
	}
  
	else if (command === 'dance') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone')
		} else {
			msg.channel.send("", {file: random.select('./textfile/dance')});
		}
	}	 
  
	else if (command === 'highfive') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone')
		} else { 
			msg.channel.send("", {file: random.select('./textfile/highfive')});
		} 
	}  
    
	else if (command === 'bed') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {      
			msg.channel.send("", {file: random.select('./textfile/bed')});
		}
	}
    
	else if (command === 'slap') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {  
			msg.channel.send("", {file: random.select('./textfile/slaps')});
		}
	}
    
	else if (command === 'swat') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {
			msg.channel.send("", {file: random.select('./textfile/newspaper')});
		}
	}
	
	else if (command === 'hug') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {
			msg.channel.send("", {file: random.select('./textfile/hugs')});
		}
	} 
    
	else if (command === 'hide') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {
			msg.channel.send("", {file: random.select('./textfile/hide')});
		}
	} 
    
	else if (command === 'facedesk') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {
			msg.channel.send("", {file: random.select('./textfile/facedesk')});
		}
	}
 
	else if (command === 'poke') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {
			msg.channel.send("", {file: random.select('./textfile/poke')});
		}
	}
	
	else if (command === 'pat') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send('You need to tag someone') 
		} else {
			msg.channel.send("", {file: random.select('./textfile/pet')});
		}
   
	   return;
	}
});
	
client.login(process.env.token);
