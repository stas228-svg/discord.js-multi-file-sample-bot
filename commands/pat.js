  if(command === "pat") {
    var sayings = [ 'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat1.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat2.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat3.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat4.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat5.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat6.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat7.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat8.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat9.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat10.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat11.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat12.gif',                                                                                                                                                                
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat13.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat14.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat15.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/pat/pat16.gif'
        ];
 
        var result = Math.floor((Math.random() * sayings.length) + 0);
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member);
        if(!member)
        return message.reply("Please mention someone of the server <3 nwn");
        let ballembed = new Discord.RichEmbed()
        .setColor("#F4425C")
        .addField(message.author.tag, `patted @${member.user.tag} nwn`);

        message.channel.send(ballembed);
        message.channel.send(sayings[result]);

}
