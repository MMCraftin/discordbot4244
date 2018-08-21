const Discord = require('discord.js');
const client = new Discord.Client();
 client.on('ready', () => {
client.on('!ready', () => {
    console.log('I am ready!');
});
 client.on('message', message => {
    if (message.content === 'ping') {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});
