const Discord = require('discord.js');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');
const prefix = '#'
//Created by TheBeatz#5170


client.on('ready', () => {
console.log('Online')
client.user.setGame('Made with ♥ by TheBeatz')
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


client.on('message', message => {
                   if(message.channel.type === "dm") return;
                     if(message.content.startsWith ("#زواج")) {
                     if(!message.channel.guild) return message.reply(' This command only for servers ')
                     var proposed = message.mentions.members.first()

                     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
                     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
                      if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                             message.channel.send(`**${proposed}
                بدك تقبلي عرض الزواج من ${message.author}
                العرض لمدة 10 ثانية
                اكتب موافقة او لا**`)

               const filter = m => m.content.startsWith("موافقة");
               message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
               })
                  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

                  const filte = m => m.content.startsWith("لا");
               message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                  message.channel.send(`**${message.author} تم رفض عرضك**`);
               })




                 }
               });



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
