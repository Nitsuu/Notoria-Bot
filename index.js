const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});


Client.on("ready", () => {
    console.log("bot opérationnel");

    //status
    Client.user.setActivity(`${Client.users.cache.size} membres`, { type: "WATCHING" })
});



Client.login("OTgxNjE2MDQ0NjU5NTc2ODUz.GFqM79.fc-ELFLrd-twFMsffTKLwM0lGG_2kZ1uSlm_wU");