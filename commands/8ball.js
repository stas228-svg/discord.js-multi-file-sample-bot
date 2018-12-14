exports.run = (client, message, args) => {
   let question = args.slice(0).join(' ');
    if (!question)
    return message.reply("Please ask a question!");
    var sayings = [ ':8ball: Absolutly.',
                    ':8ball: Absolutly not.',
                    ':8ball: It is true.',
                    ':8ball: Impossible.',
                    ':8ball: Of course.',
                    ':8ball: I do not think so.',
                    ':8ball: It is true.',
                    ':8ball: It is not true.',
                    ':8ball: I am very undoubtful of that.',
                    ':8ball: I am very doubtful of that.',
                    ':8ball: Sources point to no.',
                    ':8ball: Theories prove it.',
                    ':8ball: Reply hazy try again.',
                    ':8ball: Ask again later.',
                    ':8ball: Better not tell you now.',
                    ':8ball: Cannot predict now.',
                    ':8ball: Concentrate and ask again.'
        ];

        var result = Math.floor((Math.random() * sayings.length) + 0);
        message.channel.send(sayings[result]);
}
