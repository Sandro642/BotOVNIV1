const discord = require('discord.js')

const StatusUpdater = require('@tmware/status-rotate')

const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
console.log("Bot : OVNIV1 | ON");


const statusMessages = [
    { type: 'PLAYING', name: 'with {users} users' },
    { type: 'LISTENING', name: '{users} users' },
    { type: 'WATCHING', name: 'over {users} users' },
    { type: 'PLAYING', name: 'in {guilds} servers' },
    { type: 'PLAYING', name: '{prefix}help for help' },
    { type: 'WATCHING', name: '{guilds} servers' }
  ]
  
  const Updater = new StatusUpdater(bot, statusMessages)

});

client.login(process.env.TOKEN);
