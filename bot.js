//require('http').createServer().listen(3000);dd

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

//require('http').createServer().listen(3000);


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('Chupalo Karol Dance', { type: 'WATCHING' });
});





client.on('message', msg => {

	if (msg.content === 'Aigis, mata a Piñera') {
		msg.reply('El Presidente Sebastian Piñera ha sido eliminado.');
		console.log('awa');
		
		//getURL(msg);
	  }



  if (msg.content === 'ping') {
    msg.reply('pong');
	msg.reply('Awoooooo');
	console.log('awa');
	
	//getURL(msg);
  }

	if (msg.content === '!halp') {

		let embed = new Discord.RichEmbed()

		.setColor('#0099ff')
		.setTitle('Rom searching commands')
		//.setURL('https://discord.js.org/')
		.setAuthor('AigisBot', 'https://i.imgur.com/dbyNfIs.png')
		.setDescription('piracy=bad, unless you are poor')
		.setThumbnail('https://i.imgur.com/dbyNfIs.png')
		//.addBlankField()
		.addField('Nintendo Entertainment System', '`!nes` or `!famicom`')
		.addField('Super Nintendo (not available)', '`!snes` or `!sfc`')
		.addField('Gamecube', '`!gamecube` or `!gc`')
		.addField('Gameboy, Gameboy Color and Gameboy Advance', '`!gb`, `!gbc` and `!gba`')
		.addField('Nintendo DS', '`!ds` or `!nds`')
		.addField('Touhou main games (not available)', '`!touhou` or `!tojas`')
		
		//.addField('Inline field title', 'Some value here', true)
		//.addField('Inline field title', 'Some value here', true)
		//.addField('Inline field title', 'Some value here', true)
		.setImage('https://i.imgur.com/Irk8vtj.png')
		.setTimestamp()
		//.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png')

		msg.channel.send(embed)
  }

  //if (msg.content.startsWith('!link')) {
	  //var res = msg.content.slice(5);
	  //getURL(msg, res);
  //}

	  
	if (msg.content === '!myavatar') {
		// Remove the "var" line; it isn't necessary.
		let embed = new Discord.RichEmbed()
		// Replace "message.member" with "message.author"
		.setImage(msg.author.avatarURL)
		.setColor('#275BF0')
		msg.channel.send(embed)
	}

	if (msg.content.startsWith('!avatar')) {
		//console.log(msg.mentions.users);
		// Remove the "var" line; it isn't necessary.
		
		// Replace "message.member" with "message.author"
		let embed
		const avatarList = msg.mentions.users.map(user => { //convierte el mapa de usuarios en una lista, lo cual recorre con la variable "user"
			embed = new Discord.RichEmbed()
			.setImage(user.avatarURL)
			//user.
			.setColor('#275BF0')
			msg.channel.send(embed)
		});
		//msg.channel.send(avatarList);
		
		//msg.channel.send(embed)
	}

	if (msg.content === '!desfunar') {
		// Remove the "var" line; it isn't necessary.
		let embed = new Discord.RichEmbed()
		// Replace "message.member" with "message.author"
		.setImage("https://i.imgur.com/dr9IspB.png")
		.setColor('#275BF0')
		msg.channel.send(embed)
	}



	



	if (msg.content.startsWith('!gba')) {
		var res = msg.content.slice(5);
		getURL(msg, res, "11ENyQEKdqnQNYTQV-VAUXa3xFyZVY12n");
	}

	if (msg.content.startsWith('!ds') || msg.content.startsWith('!nds')) {
		var res;
		if (msg.content.startsWith('!ds')) {
			res = msg.content.slice(4);
		}
		else {
			res = msg.content.slice(5);
		}

		getURL(msg, res, "1dVLNOSJk9_GC0PISzlZAKRT81c1iJqXg");
	}

	if (msg.content.startsWith('!nes') || msg.content.startsWith('!famicom')) {
		var res;
		if (msg.content.startsWith('!nes')) {
			res = msg.content.slice(5);
		}
		else {
			res = msg.content.slice(9);
		}

		//var res = msg.content.slice(5);
		getURL(msg, res, "1UP1eQSsWjLYm8PvyLLYlV8idZMiYSNAV");
	}

	if (msg.content.startsWith('!gamecube') || msg.content.startsWith('!gc')) {
		var res;
		if (msg.content.startsWith('!gamecube')) {
			res = msg.content.slice(10);
		}
		else {
			res = msg.content.slice(4);
		}

		//var res = msg.content.slice(4);
		getURL(msg, res, "1FoQOif8muuqBpKG79ftBY8QcpWZ12ELM");
	}

	if (msg.content.startsWith('!smt')) {
		var res = msg.content.slice(5);
		getURL(msg, res, "1ZRCKSowl3XyXg7v-8hjAd4qPpS3mrEUY");
	}

	return;
  
});



function getURL(msg, names, folderId){
	
	const { google } = require('googleapis');
	const credentials = require('./credentials.json');
	const scopes = [
		'https://www.googleapis.com/auth/drive'
	];
	const auth = new google.auth.JWT(
		credentials.client_email, null,
		credentials.private_key, scopes
	);


	const drive = google.drive({ version: 'v3', auth });
	const sheets = google.sheets({ version: 'v4', auth });

	
	console.log('awooo5');
	msg.reply("Searching " + names);
	//msg.reply('Awoooooo2');
	//const search1 = names;
	//search1 = names;
	//msg.reply(names+ " " + 'funcion');

	//var folderId = "11ENyQEKdqnQNYTQV-VAUXa3xFyZVY12n";
	
	var awooo = "Mega";
	drive.files.list({ q: "name contains '" + names + "' and '" + folderId + "' in parents", fields: 'files(id, name, parents)', space: 'appDataFolder'}, (err, res) => {
	


		//name contains '" + names + "'   parents in '" + folderId + "'
	if (err) throw err;
		const files = res.data.files;
		console.log(files + " awooooo");
		if (files.length) {

			

			files.map((file) => {
			console.log(file.name);
			console.log(file.parents);
			//console.log(folderIds);
			//msg.reply('Awoooooo');

			msg.author.send(file.name + " " +"https://drive.google.com/uc?export=download&id=" + file.id);
		});
		msg.reply("The games have been sent, please check your PMs")
		console.log("Busqueda terminada?");
		//return files;
  } else {
    console.log('No files found');
	msg.reply("No files found");
  }
});

	
	
}	



client.login(auth.token);
//client.login(process.env.token);


