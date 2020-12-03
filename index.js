//Constants
const keep_alive = require('./keep_alive.js')
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "~";
const replies = ["Konuşamam", "Yürü git", "Benimle uğraşma", "Seni sevmiyorum"];

//Client ons
client.on("ready", ready => {
  console.log("Bot hazır!");

  client.user.setActivity("discord.gg/dRTjqU7 | ~help");
});

client.on("message", message => {
	if(message.channel.id == '690495134999248896' && !message.author.bot)
	{
		if(message.content === prefix + 'konus')
		{
			const index = Math.floor(Math.random()* replies.length);
        	message.reply(replies[index]);
		}else

		if(message.content === prefix + 'eren')
		{
			message.channel.send('eren');
		}

		
	} else return;
});

//Functions


client.login(process.env.BOTTOKEN);
