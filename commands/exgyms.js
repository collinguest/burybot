const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
    let exembed = new Discord.RichEmbed()
    .setDescription("EX GYMS FOR B.S.E")
    .setColor("#875575")
    .setThumbnail("https://i.imgur.com/npN6hzG.png")
    .addField("B.S.E EX GYMS LIST", "Lay Hill Covert (Near Symonds Road)\n[Click Here For Directions](https://www.google.co.uk/maps/place/52°14%2729.2%22N+0°43%2755.4%22E/@52.241442,0.732046,16z)\nModel of Abbey Church\n[Click Here For Directions](https://www.google.co.uk/maps/place/52°14%2742.7%22N+0°43%2708.4%22E/@52.245191,0.718999,17z)\nNowton Park\n[Click Here For Directions](https://www.google.co.uk/maps/place/52°13%2736.4%22N+0°43%2741.9%22E/@52.226765,0.728316,16z)\nSt. Mary's Square\n[Click Here For Directions](https://www.google.co.uk/maps/place/52°14%2728.2%22N+0°43%2709.7%22E/@52.241166,0.719364,16z)\nSpring Lane & Tayfen Reserve\n[Click Here For Directions](https://www.google.co.uk/maps/place/52°15%2712.3%22N+0°42%2709.0%22E/@52.253408,0.702506,16z)");

    return message.channel.send(exembed);
}

module.exports.help = {
    name: "exgyms"
}