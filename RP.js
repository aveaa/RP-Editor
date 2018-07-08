const Discord = require('discord.js');
const client = new Discord.Client( { autoreconnect: true } );

client.on('ready', () => {
    console.log("Успешный запуск RP");
    client.user.setPresence({
      status: 'dnd', //статус вашего аккаунта (dnd, idle, invisible, online)
      game: {
        name: 'cosmoteer', //название вашей игры
      }
    },);
    console.log("Успех");
});

client.login(process.env.TOKEN)
