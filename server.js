var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODE4NzI3NTQ0MDA1OTg0MjU3.YEcRcQ.xQQo_rNazj02mSntBPlhFyU929c",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "s!",
  type: "WATCHING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "s!",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}


