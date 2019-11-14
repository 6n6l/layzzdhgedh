const Discord = require('discord.js');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');
const prefix = '#'
//Created by TheBeatz#5170


client.on('ready', () => {
console.log('Online')
client.user.setGame('#دعوة')
})



client.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
//Created by TheBeatz#5170

    const person1 = args[1]
    const person12 = args[2]
    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 49);
    //const loveLevel = "♥".repeat(loveIndex) + ":poop:".repeat(1 - loveIndex);

    if(message.content.startsWith(prefix + 'حب')) {
        //message.channel.send(` وبين ${args[1]} نسبة الحب بين ${args[2]} هي ${Math.floor(love)} - ${loveLevel}`)
        const embed = new RichEmbed()
        .setColor("#ffb6c1")
        .addField(` ${args[1]} و ${args[2]} نسبة حبكما هي: 💓`,
        `${Math.floor(love)} %  ♥`)
        .setTimestamp()
        .setFooter('Version 1.1 | Made with ♥ by TheBeatz')
        message.channel.send(embed).then(sentMessage => sentMessage.react('♥'))
        .catch(console.error);
         }});

//Created by TheBeatz#5170

client.on('message', message => {
    if(message.content === prefix + 'دعوة') {
        message.channel.send('**تم إرسال رابط الدعوة لك | ♥**')
        message.author.send(`**https://discordapp.com/api/oauth2/authorize?client_id=468503366075416586&permissions=268695633&scope=bot
        
        Made With ♥ by TheBeatz
        أي سؤال/ إستفسار / مشاكل قم بالتحدث مع مبرمج البوت
        <@462752734140039168> - TheBeatz#5170**`)
    }
})


//Created by TheBeatz#5170


client.login(process.env.KEY)
