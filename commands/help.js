const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('help')
            .setTitle('help')
            .setDescription('Toutes les commandes du bot')
            .setColor('RANDOM')
            .addField('+help : affiche ce message',true)
            .addField('+oof : envoie "oof" dans le chat',true)
            .addField('+unmute : rend la parole au membre muet mentionnĂ©',true)
            .addField('+mute : rend muet le membre mentionnĂ©',true)
            .addField('+kick : expulse le membre mentionnĂ©',true)
            .addField('+tempban : banni temporairement un membre',true)
            .setAuthor('Commandes de Drigix')
            .setFooter('Drigix')
            .setTimestamp())
    },
    name: 'help'
}