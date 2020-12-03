//Constants
const keep_alive = require('./keep_alive.js')
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "~";
const replies = ["Konuşamam", "Yürü git", "Benimle uğraşma", "Seni sevmiyorum"];

//Client ons
client.on("ready", ready => {
  console.log("Bot hazır!");

  client.user.setActivity("Şerefsiz mümin | ~help");
});

client.on("message", message => {
  if (message.channel.id == "690495134999248896" && message.content === prefix + "konus") {
    const index = Math.floor(Math.random() * replies.length);
    message.reply(replies[index]);
  } 
  else if (message.channel.id == "690495134999248896" && message.content === prefix + "eren") {
    message.channel.send("eren");
  }
  else if (message.channel.id == "690495134999248896" && message.content === prefix + "help") {
    message.channel.send(
      `**~help** - Yardım menüsünü gösterir.\n**~konus** - Saçma sapan bir bot komutu :).\n**~eren** - Size ereni bastırır.`
    );
  }
});

//Functions


client.login(process.env.BOTTOKEN);
