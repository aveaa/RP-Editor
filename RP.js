const Discord = require('discord.js');
const client = new Discord.Client( { autoreconnect: true } );

client.on('ready', () => {
    /*delete client.users;
    delete client.channels;
    delete client.guilds;
    delete client.emojis;
    delete client.presences;*/
    console.log("Успешный запуск RP");
    client.user.setPresence({
      status: 'dnd', //статус вашего аккаунта (dnd, idle, invisible, online)
      game: {
        name: 'cosmoteer', //название вашей игры
        state: 'in game', //текст на 2 линии
        details: '12 solar systems', //текст на 1 линии
        application_id: '442351930929577995', //id вашего приложения
assets: { //ассесты
          small_image: '465138149413224483', //id от маленько ассеста
          small_text: 'X-49', //текст который будет виден при наведение на маленький ассест
          large_image: '465138072498208768', //id от большого ассеста
          large_text: 'Rocket Shark' //текст который будет виден при наведение на большой ассест
        }
      }
    },);
    console.log("Успех");
});

client.login(process.env.TOKEN)
