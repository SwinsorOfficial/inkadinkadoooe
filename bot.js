const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(MzcxMzcyNDc2NDc2Njg2MzQ5.DM02og.Z1DePDA1DTBp9wLQbS-swoB8kng);
