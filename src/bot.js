require('dotenv').config();

const {Client} = require('discord.js')
const client = new Client({
    partials: ['MESSAGE']
  });

const PREFIX = "$";

client.on('ready',()=>{
    console.log(`${client.user.username} has login`)
});




client.on('message',(message)=>{

    if(message.author.bot === true)
    console.log(`[${message.author.username}]: ${message.content}`)
    if(message.content === 'hello')
        message.channel.send("chal hatt bosdike");
    
        if(message.content === 'bosdike')
        message.channel.send("tu bosdika");
        if(message.content === 'mc')
        message.channel.send("apna kam krna mc");
        if(message.content === 'bc')
        message.channel.send("nothing just chill");
        if(message.content === 'wah')
        message.channel.send("chal hatt bosdike");        



  if(message.author.bot) return;
  if(message.content.startsWith(PREFIX)){
      const [CMD_NAME, ...args]= message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if(CMD_NAME=== 'kick')
    {   if(args.length=== 0) return message.reply("invalid id")
        const member = message.guild.members.cache.get(args[0])

        if(member){
            member.
            kick()
            .then((message) => message.channel.send(`${member} was kicked`))
            .catch((err)=> message.channel.send('I don not have this fucking  permission'));

        }
        else{
            message.channel.send('memeber not found')
        }
    }


  }
});


client.login(process.env.DISCORDJS_BOT_TOKEN);

