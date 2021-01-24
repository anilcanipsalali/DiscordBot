//Constants
const keep_alive = require('./keep_alive.js')
const Discord= require("discord.js");
const fetch = require('node-fetch');
const client = new Discord.Client({disableEveryone: true})
const prefix = "~";
const ff = require('ffmpeg-static')
var version = '1.1';

//Music Bot
const ytdl = require('ytdl-core')

//Execute js files
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//Client on
client.on("ready", ready => {
  console.log("Bot hazır! " + version);

  client.user.setActivity("Trouble5 | ~help");
});

client.on('guildMemberAdd', guildMember => {
	let hosgeldinRole = guildMember.guild.roles.cache.find(role => role.name === 'Active/Loyal');
	guildMember.roles.add(hosgeldinRole);
	guildMember.guild.channels.cache.get('573639066583695361').send(`<@${guildMember.user.id}> Sunucuya hoş geldin! İyi eğlenceler!`)
})

client.on("message", message => {
	if(!message.author.bot)
	{
		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		if(command === 'help') {
			client.commands.get('help').execute(message, args, Discord);
		}else
		
		if(command === 'temizle') {
			client.commands.get('temizle').execute(message, args);
		}else

		if(command === 'ping') {
			client.commands.get('ping').execute(message, args);
		}else

		if(command === 'serverbilgi') {
			client.commands.get('serverbilgi').execute(message, args, Discord);
		}else

		if(command === 'discordlink') {
			client.commands.get('discordlink').execute(message, args)
		}else

		if(command === 'baslat')
		{
			client.commands.get('baslat').execute(message, args, client, ytdl);
		}else
		
		if(command === 'durdur')
		{
			client.commands.get('durdur').execute(message, args);
		}
		
		if(command === 'gif')
		{
			client.commands.get('gif').execute(message,args,fetch);
		}
		
	}else return;
});

//Login
client.login(process.env.BOTTOKEN);
