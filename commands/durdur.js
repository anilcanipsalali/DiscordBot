module.exports = {
	name: 'durdur',
	description: 'Kanalda şarkıyı durdurmaya yarayan komut.',
	async execute(message, args) {
		if(!message.member.voice.channel) return message.channel.send("Botu durdurmak için ses kanalında bulunmanız gerek.")
		message.member.voice.channel.leave()
		return undefined
	}
}