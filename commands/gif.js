module.exports = {
	name: 'gif',
	description: 'Random bir gif almak için komut.',
	async execute(message, args,fetch) {
		let keywords = 'random'
		
		if(args != null) {
			keywords = args;
		}

		let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8`
		let response = await fetch(url);
		let json = await response.json();
		console.log(json);

		let index = Math.floor(Math.random() * json.results.length);
		message.channel.send(json.results[index].url);
	}
}