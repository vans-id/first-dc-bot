const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
  partials: ['MESSAGE'],
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';

client.on('ready', () => {
  console.log('Bot is ready');
});

client.login(process.env.BOT_TOKEN);

client.on('messageDelete', (msg) => {
  msg.channel.send('Stop Deleting Messages!');
});

client.on('message', (msg) => {
  if (msg.content.toLocaleLowerCase() == 'tarik sis') {
    msg.react('❤️');
  }
  if (
    msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`
  ) {
    modUser(msg);
  }
});

const modUser = (msg) => {
  msg.member.roles.add('793412202660626452');
  msg.reply('role has been updated!');
};
