const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('!ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!server') {
    	message.reply('We Play On Rusty|NY|3X|TP|Home|Insta|Clans|Kits|Loot|Events|Smelt The Ip Is 74.91.123.29:21215');
  	}
});

if(message.content.startsWith(prefix + "test"))

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
