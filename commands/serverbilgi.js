module.exports = {
	name: 'serverbilgi',
	description: 'Server hakkında bilgi veren bir komut.',
	execute(message, args, Discord) {
		let guild = message.guild;
		var serverIcon = message.guild.iconURL();
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#304281')
		.setTitle('Server Bilgi')
		.setThumbnail(serverIcon)
		.setAuthor(message.author.username)
		.addField('Server Sahibi', message.guild.owner, true)
  		.addField('Server İsmi', '`' + message.guild.name + '`', true)
  		.addField('Üye Sayısı', '`' + message.guild.memberCount + '`', true)
		.setTimestamp()
		message.channel.send(newEmbed);
	}
}

