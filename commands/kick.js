 exports.run = (client, message, args) => {
 if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry. You don't have permissions to kick people.");
    

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role than me? Do I have kick permissions?");
    
    

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a kick!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry. I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
