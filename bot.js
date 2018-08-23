const Discord = require('discord.js');
const client = new Discord.Client();
const mysql = require("mysql")

var con = mysql.createConnection({

	host: "sql9.freemysqlhosting.net"
	user: "sql9253430"
	password: "7PT7quQX1R"
	database: "sql9253430"

});

con.connect(err => {

	if(err) throw err;
	console.log("Connected To Database")

});

client.on('!ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!serverset') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
