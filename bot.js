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

    if(message.content.startsWith(prefix + 'حب')) {
        //message.channel.send(` وبين ${args[1]} نسبة الحب بين ${args[2]} هي ${Math.floor(love)} - ${loveLevel}`)
        const embed = new RichEmbed()
        .setColor("#ffb6c1")
        .addField(` ${args[1]} و ${args[2]} نسبة حبكما هي: :cloud:`,
        `||${Math.floor(love)}%||`)
        .setTimestamp()
        .setFooter('Made with ♥ by TheBeatz')
        message.channel.send(embed).then(sentMessage => sentMessage.react('♥'))
        .catch(console.error);
         }});




client.login(process.env.KEY)
