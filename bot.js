const Discord = require('discord.js');
const client = new Discord.Client();
 client.on('ready', () => {
    console.log('I am ready!');
});
 client.on('message', message => {
    if (message.content === '!peter') {
    	message.reply('Is Gay');
  	}
});
 // THIS  MUST  BE  THIS  WAY


client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "test");
    member.addRole(role).catch(console.error);
});

client.login(process.env.BOT_TOKEN);
