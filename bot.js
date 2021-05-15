//require('http').createServer().listen(9222);

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const auth = process.env.DISCORD_AUTH;
const caca = require('./credentials.json');


const sagiri = require('sagiri');

 

//require('http').createServer().listen(3000);

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!halp for rom searching commands', { type: 'PLAYING' });
});





client.on('message', msg => {

	

	switch(true) {

		case msg.content==='Aigis, mata a Piñera':
			msg.reply('El Presidente Sebastian Piñera ha sido eliminado.');
			console.log('awa');
			break

		case (msg.content.startsWith('!silence')):
			sendmeme(msg);
			break

		case (msg.content === '!halp'):
			msg.channel.send(halp());
			break
		
		case (msg.content === '!myavatar'):
			embedIMG(msg.author.avatarURL, msg);
			break

		case (msg.content === '!sauce'):
			msg.channel.send(salsa(msg));
			break

		case (msg.content.startsWith('!avatar')):
			const avatarList = msg.mentions.users.map(user => { //convierte el mapa de usuarios en una lista, lo cual recorre con la variable "user"
				embedIMG(user.avatarURL, msg);
			});
			break

		case (msg.content === '!desfunar'):
			embedIMG("https://i.imgur.com/dr9IspB.png", msg);
			break

		case (msg.content === '!ps2 shin megami tensei marselo' || msg.content === '!ps2 Shin Megami Tensei marselo' || msg.content === '!ps2 shin megami tensei Marselo' || msg.content === '!ps2 Shin Megami Tensei Marselo'):
			embedIMG("https://i.imgur.com/W0PC2nA.png", msg);
			break
		
		case (msg.content === 'Asi pasa' || msg.content === 'asi pasa' || msg.content === 'Así pasa' || msg.content === 'así pasa'):
			msg.channel.send("cuando sucede");
			break

		case (msg.content.startsWith('!gbc')):
			var res = msg.content.slice(5);
			getURL(msg, res, "1aPdNOt1kqXJvND2rWOOxe4l4l5iL8nJO");
			break

		case (msg.content.startsWith('!gba')):
			var res = msg.content.slice(5);
			getURL(msg, res, "11ENyQEKdqnQNYTQV-VAUXa3xFyZVY12n");
			break

		case (msg.content.startsWith('!snes') || msg.content.startsWith('!sfc') ):
			var res;
			if (msg.content.startsWith('!snes')) {
				res = msg.content.slice(6);
			}
			else {
				res = msg.content.slice(5);
			}
			getURL(msg, res, "1bhZ-dmKGEiWuo4UVH-PFhqf6lvq-uAcj");
			break

		case (msg.content.startsWith('!gb') && msg.content[3]===" "):
			var res = msg.content.slice(4);
			getURL(msg, res, "1Y5wfpQCGq73pkK8z44A4LryotFwjLyCt");
			break

		case (msg.content.startsWith('!ds') || msg.content.startsWith('!nds') ):
			if (msg.content.startsWith('!ds')) {
				var res = msg.content.slice(4);
			}
	
			else {
				var res = msg.content.slice(5);
			}
			
			getURL(msg, res, "1dVLNOSJk9_GC0PISzlZAKRT81c1iJqXg");
			break

		case (msg.content.startsWith('!nes') || msg.content.startsWith('!famicom')):
			var res;
			if (msg.content.startsWith('!nes')) {
				res = msg.content.slice(5);
			}
			else {
				res = msg.content.slice(9);
			}

			//var res = msg.content.slice(5);
			getURL(msg, res, "1UP1eQSsWjLYm8PvyLLYlV8idZMiYSNAV");
			break

		case (msg.content.startsWith('!64')):
			var res = msg.content.slice(4);
			getURL(msg, res, "1RXohCQUSlEGMMuWQCJNDXlRI_eUXp2SW");
			break

		case (msg.content.startsWith('!gamecube') || msg.content.startsWith('!gc')):
			msg.channel.send("Note: these files works on Dolphin emulator (the latest development version) but not on real hardware. If you're using real hardware, use https://vimm.net/vault/?p=nkit to convert to ISO.")
			var res;
			if (msg.content.startsWith('!gamecube')) {
			res = msg.content.slice(10);
			}
			else {
			res = msg.content.slice(4);
			}

			//var res = msg.content.slice(4);
			getURL(msg, res, "1Dphhgdzv6OQlNuvoynGdl2Mmm_FrPdQ-");
			break

		case (msg.content.startsWith('!psx') || msg.content.startsWith('!ps1')):
			var res = msg.content.slice(5);
			getURL(msg, res, "1gKFFrPZ4dRotmWoYt0vtptT_ZJ5IYomw");
			break

		case (msg.content.startsWith('!ps2')):
			var res = msg.content.slice(5);
			getURL(msg, res, "15LkZkqVaIuVaRaUc-6ah2hpco8cas9WU");
			break

		case (msg.content.startsWith('!psp')):
			var res = msg.content.slice(5);
			getURL(msg, res, "1xZHKYjRpEsQIGgzjDEo2Ygf0Pt0XfER7");
			break

		case (msg.content.startsWith('!3ds')):
			var res;
			if (msg.content.startsWith('!3ds vc')) {
				res = msg.content.slice(8)
			}
			else {
				res = msg.content.slice(5);
			}
			getURL(msg, res, "1TZckYdpmCAcwZQ35ui-9yzTrqNQUnBLn");
			break

		case (msg.content.startsWith('!dreamcast') || msg.content.startsWith('!dc')):
			var res;
			if (msg.content.startsWith('!dreamcast')){
			res = msg.content.slice(11);
			}
			else {
			res = msg.content.slice(4);
			}
			getURL(msg, res, '1co48U58-ypWVKLzn8iiPbOXz9P_AygcC');
			break

		case (msg.content.startsWith('!wii')):
			var res = msg.content.slice(5);
			msg.channel.send("Note: these files works on Dolphin emulator (the latest development version) but not on real hardware. If you're using real hardware, use https://vimm.net/vault/?p=nkit to convert to ISO.")
			getURL(msg, res, "1SDY8linNWF9QHsu1nD6VWtO3N6DFhKFt");
			break

		case (msg.content.startsWith('!switch')):
			msg.channel.send('Important: Does not contain important first party titles like Super Mario Oddyssey, Super Smash Bros. Ultimate, etc');
			var res = msg.content.slice(8);
			getURL(msg, res, "15AP4RRsZ8TujFbeE4riHpuo6w8K4oT7I");
			break
		
		case (msg.content.startsWith('!genesis') || msg.content.startsWith('!megadrive')):
			var res;
			if (msg.content.startsWith('!genesis')) {
				res = msg.content.slice(9);
			}
			else {
				res = msg.content.slice(11);
			}
			getURL(msg, res, "1DrFVEzUpWNO94Evizws6en1wHJzbyiiQ");
			break
	}



	//if (msg.content === '!id') {
		//console.log(msg.author.tag);
	//}


	// if (msg.content.startsWith('!avatar')) {
	// 	//console.log(msg.mentions.users);
	// 	// Remove the "var" line; it isn't necessary.
		
	// 	// Replace "message.member" with "message.author"
	// 	const avatarList = msg.mentions.users.map(user => { //convierte el mapa de usuarios en una lista, lo cual recorre con la variable "user"
	// 		embedIMG(user.avatarURL, msg);
	// 	});
	// 	//msg.channel.send(avatarList);
		
	// 	//msg.channel.send(embed)
	// }



	//if (msg.content === '!dolar') {
		//console.log(fx(1).from("USD").to("CLP"));
	//}

  
});

client.login(auth);
//client.login(process.env.token);


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
						//console.log("AAAAGRIA3" +  + "Awooooo");
						saucenao(img.url, msg);

					}
					
				});
			}


		})

	})

}



async function saucenao(img, msg) {
	
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
			awa=false;
			console.log("Probando 1 2 3 " + urls.url);
			//msg.channel.send(urls.thumbnail);
	
			
		}
	})
}


function getURL(msg, names, folderId){


	var nasos=0;


	if (folderId==="1FTyDmwEhBF9IRV5PiymfbMfh0pIclzur") {

		nasos=1;

	}
	
	const { google } = require('googleapis');
	const credentials = JSON.parse(process.env.GOOGLE_AUTH)
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
	
	//msg.reply('Awoooooo2');
	//const search1 = names;
	//search1 = names;
	//msg.reply(names+ " " + 'funcion');

	//var folderId = "11ENyQEKdqnQNYTQV-VAUXa3xFyZVY12n";

	if (checkCommand(names, msg)) {

		msg.reply("Searching " + names);

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

			if (nasos===1) {
				msg.author.send("Download https://drive.google.com/file/d/1iU8WMD4hziVjtpGvhnfd2JfFlpeFhWv3/view?usp=sharing and extract the files into a folder. To extract a rom drag the rom onto the .exe, a command prompt should popup and extract the ISO from the .dec file.")
				nasos=0;
			}
			//return files;
	  } else {
		console.log('No files found');
		msg.reply("No files found");
		  }
		});

	}
	
}	

function halp() {

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
	.addField('Gamecube (NKit GCZ)', '`!gamecube` or `!gc`. `!gc iso` for ISOs (USA only)')
	.addField('Nintendo Wii (NKit GCZ)', '`!wii`', true)
	.addField('Gameboy, Gameboy Color and Gameboy Advance', '`!gb`, `!gbc` and `!gba`')
	.addField('Nintendo DS', '`!ds`', true)
	.addField('Nintendo 3DS (cia only)', '`!3ds`, `!3ds vc` for Virtual Console games')
	.addField('Nintendo Switch', '`!switch`')

	//.setDescription('Note: It doesnt include important AAA titles... for now')

	.addField('PlayStation, PlayStation 2 and PlayStation Portable', '`!psx`, `!ps2` and `!psp`')
	.addField('Sega Genesis/MegaDrive', '`!genesis` or `!megadrive`')
	.addField('Dreamcast', '`!dreamcast` or `!dc`', true)
	//.addField('Touhou main games (not available)', '`!touhou` or `!tojas`')
	
	//.addField('Inline field title', 'Some value here', true)
	//.addField('Inline field title', 'Some value here', true)
	//.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/Irk8vtj.png')
	.setTimestamp()
	//.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png')


	return embed;


}


function splitmsg(args) {


	console.log("AWoooo64");
	args.shift().toLocaleLowerCase();

	console.log(args);

	let text = args.join(" ");
	let op = text.split(' - ');

	console.log(op);

	return op;


}

async function meme(abajo, arriba, msg) {

	var Imgflipper = require('imgflipper');
	var imgflipper = new Imgflipper("Lea23vc", "leandro23");
	console.log("probando meme" + abajo + " " + arriba);

	imgflipper.generateMeme(212777853, abajo, arriba, (err, img) => {

		if(err) return console.log(err);


		console.log(img);

		embedIMG(img, msg);

	});

}



async function sendmeme (msg) {


	let prefix = '!silence';
	const args = msg.content.slice(prefix.length-1).trim().split(/ +/g);

	var op = splitmsg(args);
	
	//url = await getURLmeme(op[0], op[1]);
	//console.log("Probando url: " + url);

	meme(op[0],op[1], msg);
	

}

async function embedIMG (url, msg) {

	let embed = new Discord.RichEmbed()
	.setImage(url)
	//user.
	.setColor('#275BF0')

	msg.channel.send(embed);


}

function checkCommand (name, msg) {

	if (name==="") {
		msg.channel.send("I think you forgot the name of the game, try again");
		return false;
	}
	else return true;

}