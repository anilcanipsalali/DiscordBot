module.exports = {
	name: 'help',
	description: `Bot'un tüm komutlarını gösteren bir yardım komutu`,
	execute(message, args, Discord) {

		const newEmbed = new Discord.MessageEmbed()
		.setColor('#304281')
		.setTitle('Yardım')
		.setDescription('Aşağıdaki komutları kullanarak botu kullanabilirsiniz.')
		.addFields(
			{name: '~help', value:'-Bot komutlarını öğrenmek için bir yardımcı komut.'},
			{name: '~serverbilgi', value:`Server hakkında bilgi veren bir komut.`},
			{name: '~temizle <sayı>', value:'-Mesaj kanalindeki ögeleri silen bir komut '},
			{name: '~ping', value:`Bot'un server'a olan gecikmesini gösteren bir komut.`},
			{name: '~ban', value:`Bir kullancıyı server'dan banlamak için kullanılan bir komut(Yetki gerektirir).`},
			{name: '~kick', value:`Bir kullancıyı server'dan atmak için kullanılan bir komut(Yetki gerektirir).`},
			{name: '~baslat <link>', value:`Ses kanalında youtube üzerinden bir link ile dinlemek için gereken komut.`},
			{name: '~durdur', value:`Ses kanalındaki botu durdurmak için kullanılan komut.`},
		)
		.setImage('https://media.sketchfab.com/models/0a89215070b044c495d400f9f3aa75cb/thumbnails/9962fda61c174ba68aca30e8fa64ebd0/dbe66372ed5a4c3c91ecfde39443cbc2.jpeg')

		message.channel.send(newEmbed);
	}
}