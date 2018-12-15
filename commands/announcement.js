

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
      
    const sayMessage = args.join(" ");
   
    message.delete().catch(O_o=>{}); 
    
    message.channel.send({embed: {
    color: 16752640,
    title: 📢 Announcement,
    description: sayMessage,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "copyright MAHThemes"
    }
  }
});
  }
