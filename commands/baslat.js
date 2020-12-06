module.exports = {
	name: 'baslat',
	description: 'Kanalda şarkı başlatmaya yarayan komut.',
	async execute(message, args, client, ytdl) {
		const voiceChannel = message.member.voice.channel
		if(!voiceChannel) return message.channel.send("Şarkı çalabilmek için ses kanalında bulunman gerekiyor.")
		const permissions = voiceChannel.permissionsFor(message.client.user)
		if(!permissions.has('CONNECT')) return message.channel.send("Bu kanala bağlanmak için yetkim yok.")
		if(!permissions.has('SPEAK')) return message.channel.send("Bu kanalda konuşmak için yetkim yok.")
		
		try {
			var connection = await voiceChannel.join();
		} catch (error) {
			console.log(`Ses kanalına bağlanırken bir hata oluştu: ${error}`)
			message.channel.send(`Ses kanalına bağlanırken bir hata oluştu: ${error}`)
		}

		const dispatcher = connection.play(ytdl(args[0]))
		.on('finish', () => {
			voiceChannel.leave()
		})
		.on('error', error => {
			console.log(error)
		});
		dispatcher.setVolumeLogarithmic(5/5)
	} 
}