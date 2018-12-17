exports.run = (client, message, args) => {
    var sayings = [ 'https://i.ibb.co/Nrx4tsd/thumbs4.gif',
                    'https://i.ibb.co/54vY3WV/thumbs1.gif',
                    'https://i.ibb.co/xXJ5Nhh/thumbs2.gif',
                    'https://i.ibb.co/Kj2LvjW/thumbs3.gif',
                    'https://i.ibb.co/ckp1Sz0/thumbs5.gif',
                    'https://i.ibb.co/qy26vHn/thumbs6.gif',
                    'https://i.ibb.co/LJf661g/thumbs7.gif',
                    'https://i.ibb.co/4J1NjJ4/thumbs8.gif',
                    'https://i.ibb.co/z2XdMwy/thumbs9.gif',
                    'https://i.ibb.co/Wc44nd1/thumbs10.gif',
                    'https://i.ibb.co/4TPyXz6/thumbs11.gif',
                    'https://i.ibb.co/5nxVNDZ/thumbs12.gif',                                                                                                                                                                
                    'https://i.ibb.co/41sqLGG/thumbs13.gif',
                    'https://i.ibb.co/rMK5MJ1/thumbs14.gif',
                    'https://i.ibb.co/gRx0pnS/thumbs15.gif',
                    'https://i.ibb.co/r542R2d/thumbs16.gif'
        ];
 
        var result = Math.floor((Math.random() * sayings.length) + 0);
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member);
        if(!member)
        return message.reply("UwU Try mentioning a server member");
        let ballembed = new Discord.RichEmbed()
        .setColor("#F4425C")
        .addField(message.author.tag, `:thumbsup:  @${member.user.tag}`);
        message.channel.send(ballembed);
        message.channel.send(sayings[result]);
}
