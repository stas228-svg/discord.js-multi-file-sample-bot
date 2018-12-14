

exports.run = (client, message, args) => {
    if (msg.mentions.users.size < 1) {
        throw '@mention some people to shoot!';
    }

    let output = msg.mentions.users.map(m => `**${m}** :gun:`).join('\n');

    msg.delete();
    message.channel.send({
        embed: bot.utils.embed(`${bot.user.username} is on a killing spree!`, output)
    });
}
