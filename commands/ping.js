module.exports = {
	name: 'ping',
	description: `Server'daki gecikmeyi gösteren bir komut.`,
	execute(message, args) {
		message.channel.send(`Gecikme: ${Date.now() - message.createdTimestamp}ms.`);
	}
}