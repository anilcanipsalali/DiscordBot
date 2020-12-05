//Constants
const keep_alive = require('./keep_alive.js')
const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const prefix = "~";
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//Client on
client.on("ready", ready => {
  console.log("Bot hazır!");

  client.user.setActivity("Trouble5 | ~help");
});

client.on('guildMemberAdd', guildMember =>{
	let hosgeldinRole = guildMember.guild.roles.cache.find(role => role.name === 'Active/Loyal');
	guildMember.roles.add(hosgeldinRole);
	guildMember.guild.channels.cache.get('573639066583695361').send(`<@${guildMember.user.id}> Sunucuya hoş geldin! İyi eğlenceler!`)
})

client.on("message", message => {
	if(message.channel.id == '784105610429988905' && !message.author.bot)
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
		}
		
	}else return;
});

//Login
client.login(process.env.BOTTOKEN);
