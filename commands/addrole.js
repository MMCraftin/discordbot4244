const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @username rolename
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission to do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  let role = args.join(" ").slice(16);
  if(!role) return message.reply("You need to specify the role you want to use.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("That Role Does Not Exist.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`You have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}

//Made By MMCraftin
//Discord Bot V0.2
