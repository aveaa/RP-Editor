const Discord = require('discord.js');
const client = new Discord.Client( { autoreconnect: true } );

client.on('ready', () => {
    console.log("Успешный запуск RP");
    client.user.setPresence({
      status: 'dnd', //статус вашего аккаунта (dnd, idle, invisible, online)
      game: {
        name: 'cosmoteer', //название вашей игры
        state: 'in game', //текст на 2 линии
        details: '12 solar systems', //текст на 1 линии
        application_id: '442351930929577995', //id вашего приложения
      }
    },);
    console.log("Успех");
});

client.login(process.env.TOKEN)
