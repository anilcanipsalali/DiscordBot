//Constants
const keep_alive = require('./keep_alive.js')
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "~";
const replies = ["Konuşamam", "Yürü git", "Benimle uğraşma", "Seni sevmiyorum"];

//Client ons
client.on("ready", ready => {
  console.log("Bot hazır!");

  client.user.setActivity("Trouble5 | ~help");
});

client.on("message", message => {
	if(message.channel.id == '784105610429988905' && !message.author.bot)
	{
		if(message.content === prefix + 'konus')
		{
			const index = Math.floor(Math.random()* replies.length);
        	message.reply(replies[index]);
		}else

		if(message.content === prefix + 'ping')
		{
			const timeTaken = Date.now() - message.createdTimestamp;
			message.reply(`Ping: ${timeTaken} ms.`);
		}else
		
		if(message.content === prefix + 'serverbilgi')
		{
			client.guilds.cache.forEach((guild) => {
				message.channel.send(`${guild.name} server\'ında ${guild.memberCount} kişi var.`)
			})
		}else

		if(message.content === prefix + 'discordlink')
		{
			message.channel.send('discord.gg/dRTjqU7')
		}else

		if(message.content === prefix + 'help')
		{
			message.channel.send(`**~konus** - Saçmasapan bir bot komutu :laughing:.\n**~ping** - Server'daki pingi gösterir.\n**~severbilgi** - Server'daki kişi sayısını gösterir.\n**~temizle <mesaj sayısı>** - Kanaldaki mesajları siler.(Henüz yapım aşamasında..:timer:)`)
		}else

		if(message.content === prefix + 'temizle' && message.member.hasPermission('Admins'))
		{
			if(!numberofmessages) return message.reply(`Silinecek mesaj sayısını girmediniz.`)

			else if(isNaN(numberofmessages)) return message.reply(`Girdiğiniz parametre sayı değil.`)

			else if(numberofmessages > 100) return message.reply(`100\'den fazla mesaj silemezsiniz.`)

			else if(numberofmessages < 1) return message.reply(`En az 1 mesaj silebilirsiniz.`)
		}
		
	}else return;
});

//Login
client.login(process.env.BOTTOKEN);
