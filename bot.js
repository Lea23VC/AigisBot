//require('http').createServer().listen(9222);

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');


const sagiri = require('sagiri');


//require('http').createServer().listen(3000);

var params = {
	'offset': 0,
	'limit': 10,
	'sort': 'score',
	'order': 'desc'
  };



client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('Chupalo Karol Dance | !halp for rom searching commands', { type: 'PLAYING' });
});





client.on('message', msg => {

	if (msg.content === 'Aigis, mata a Piñera') {
		msg.reply('El Presidente Sebastian Piñera ha sido eliminado.');
		console.log('awa');
		
		//getURL(msg);
	  }

 if (msg.content.startsWith('!silence')) {
	//var imgflipper = new Imgflipper("Lea23vc", "leandro23");
	console.log("AWoooo64");
	let prefix = '!silence';
	const args = msg.content.slice(prefix.length-1).trim().split(/ +/g);

	args.shift().toLocaleLowerCase();

	console.log(args);

	let text = args.join(" ");
	let op = text.split(' - ');

	console.log(args);

	var arriba = op[0];
	var abajo = op[1];
	console.log(abajo + " " + arriba );
	
	var Imgflipper = require('imgflipper');
	var imgflipper = new Imgflipper("Lea23vc", "leandro23");

	imgflipper.generateMeme(212777853, arriba.toLocaleLowerCase(), abajo, (err, img) => {

		if(err) return console.log(err);

		msg.channel.send(img);

	});

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
		.addField('Super Nintendo', '`!snes` or `!sfc`')
		.addField('Nintendo 64', '`!64`')
		.addField('Gamecube', '`!gamecube` or `!gc`')
		.addField('Gameboy, Gameboy Color and Gameboy Advance', '`!gb`, `!gbc` and `!gba`')
		.addField('Nintendo DS', '`!ds` or `!nds`')
		.addField('PlayStation', '`!psx`')

		//.addField('Touhou main games (not available)', '`!touhou` or `!tojas`')
		
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


	if (msg.content === '!sauce') {

		salsa(msg);

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



	
	if (msg.content.startsWith('!gbc')) {
		var res = msg.content.slice(5);
		getURL(msg, res, "1aPdNOt1kqXJvND2rWOOxe4l4l5iL8nJO");
	}


	if (msg.content.startsWith('!gba')) {
		var res = msg.content.slice(5);
		getURL(msg, res, "11ENyQEKdqnQNYTQV-VAUXa3xFyZVY12n");
	}

	if (msg.content.startsWith('!snes') || msg.content.startsWith('!sfc') ) {
		var res;
		if (msg.content.startsWith('!snes')) {
			res = msg.content.slice(6);
		}
		else {
			res = msg.content.slice(5);
		}
		getURL(msg, res, "1bhZ-dmKGEiWuo4UVH-PFhqf6lvq-uAcj");
	}

	if (msg.content.startsWith('!gb') && msg.content[3]===" ") {  //Remover hasta encontrar una manera de que !gb no busque cuando se llama a !gba
		var res = msg.content.slice(4);
		getURL(msg, res, "1Y5wfpQCGq73pkK8z44A4LryotFwjLyCt");
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

	if (msg.content.startsWith('!64')) {
		var res = msg.content.slice(4);
		getURL(msg, res, "1RXohCQUSlEGMMuWQCJNDXlRI_eUXp2SW");
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

	if (msg.content.startsWith('!psx')) {
		var res = msg.content.slice(5);
		getURL(msg, res, "1gKFFrPZ4dRotmWoYt0vtptT_ZJ5IYomw");
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


async function salsa(msg) {
	msg.channel.fetchMessages({ limit: 25 }).then(messages => {

		found = new Boolean(); //iniciar boolean
		console.log("AAAGRIA -1");

		messages.forEach(mensaje => {
			console.log("AAAGRIA -2");
			if (mensaje.attachments && found) {
				var lastme = mensaje.attachments.forEach(img => {
					console.log("AAAAGRIA");
					if (img.url.endsWith(".png") || img.url.endsWith(".jpg") || img.url.endsWith(".jpeg") || img.url.endsWith(".PNG") || img.url.endsWith(".JPG") ||  img.url.endsWith(".JPEG") ||  img.url.endsWith(".gif") || img.url.endsWith(".GIF")) {
						//msg.channel.send(img.url);
						found = false;
						console.log("AAAAGRIA3");
						salsa2(img.url, msg);

					}
					
				});
			}


		})

	})
}

async function salsa2(img, msg) {
	
	var awa = Boolean(true);

	const cliente = sagiri('3397773ef599feb5954db044e6e89e377434dd4b' ,  {results: 10 });
	console.log("WRYYYY");
	const salsaa = await cliente(img , { results: 10 });
	console.log(salsaa);
	i=0;
	salsaa.forEach(urls => {
		console.log(urls.url);
		if (awa) {
			msg.channel.send(urls.url);
			//msg.channel.send(urls.thumbnail);
			awa=false;
			

		}
		
		
	})

		
}

client.login(auth.token);
//client.login(process.env.token);


