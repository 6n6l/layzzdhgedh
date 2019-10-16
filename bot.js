const Discord = require('discord.js');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');
const prefix = '#'


client.on('ready', () => {
console.log('Online')
client.user.setGame('Made With ♥ by TheBeatz')
})



client.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const person1 = args[1]
    const person12 = args[2]
    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 49);
    const loveLevel = "♥".repeat(loveIndex) + ":poop:".repeat(1 - loveIndex);

    if(message.content.startsWith(prefix + 'حب')) {
        const embed = new RichEmbed()
        .setColor("#ffb6c1")
        .addField(` ${args[1]} و ${args[2]} نسبة حبكما هي: :cloud:`,
        `${Math.floor(love)} %  ${loveLevel} `)
        .setTimestamp()
        .setFooter('Made with ♥ by TheBeatz')
        message.channel.send(embed);
         }});




client.login('NDY4NTAzMzY2MDc1NDE2NTg2.XadnMg.L_0IKdMK79kUO-rRwjpn5uuJ11k')
