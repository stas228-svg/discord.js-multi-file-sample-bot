  if(command === "suicide") {
    var sayings = [ 'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide1.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide2.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide3.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide4.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide5.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide6.gif',
                    'https://pm3-cl.dws.nry.infinitycdn.ml/sunqualmedia/suicide-gifs/suicide7.gif'
        ];
 
        var result = Math.floor((Math.random() * sayings.length) + 0);

        let ballembed = new Discord.RichEmbed()
        .setColor("#F4425C")
        .addField(message.author.tag, "committed suicide! :gun: ;-;/");

        message.channel.send(ballembed);
        message.channel.send(sayings[result]);

}
