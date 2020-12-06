module.exports = {
	name: 'temizle',
	description: 'Mesaj kanalindeki ögeleri silen bir komut.',
	async execute(message, args) {
			if(!args[0]) return message.reply("Lütfen silenecek mesaj sayısını giriniz.");
			if(isNaN(args[0])) return message.reply("Lütfen sayı giriniz.");
			if(args[0] > 100) return message.reply("100'den fazla mesajı silemezsiniz.");
			if(args[0] < 1) return message.reply("En az 1 mesaj silebilirsiniz.");

			await message.channel.messages.fetch({limit: args[0]}).then(messages => {
				message.channel.bulkDelete(messages);
			})
	}	
}
