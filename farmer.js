const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Botを起動しました`);
});

client.on('message', message => {
    if (message.content === "パンダ") {
    message.reply("パンダじゃねえ！");
  }
    if (message.content === "farmer") {
    message.reply("呼んだ？");
  }
    
   
});

client.login("xxxxxxx");



