const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

require('http').createServer().listen(3000);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
	msg.reply('Awoooooo');
	console.log('awa');
	
	//getURL(msg);
  }

  if (msg.content.startsWith('!link')) {
	  //msg.reply('Awoooooo5');
	  console.log('awa4');
	  var res = msg.content.slice(5);
	  //msg.reply(res);
	  getURL(msg, res);
  }
  
  
});



function getURL(msg, names){
	
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

	var folderId = "11ENyQEKdqnQNYTQV-VAUXa3xFyZVY12n";
	
	var awooo = "Mega";
	drive.files.list({ q: "name contains '" + names + "'" }, (err, res) => {	
	if (err) throw err;
		const files = res.data.files;
		if (files.length) {

			files.map((file) => {
			//msg.reply('Awoooooo');
			msg.author.send(file.name + " " +"https://drive.google.com/uc?export=download&id=" + file.id);
		});
		msg.reply("The games have been sent, please check your PMs")
		return files;
  } else {
    console.log('No files found');
	msg.reply("No files found");
  }
});

	
	
}	



client.login(auth.token);
client.login(process.env.token);


