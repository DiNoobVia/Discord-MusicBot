module.exports = {
  Admins: ["427363496028667904", "427363496028667904"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODcyOTE2NDc3NTEzMTk5NjQ2.YQw00g.QuoNvImMsKX-fmeJvhnPoe6vyrs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "872916477513199646", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "5f0L09wcgpYQimC3-XaBIA-dld6punIK", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ddb9d767dded4bb88e22216990cd0049", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "123943d517214c37957959a1e035ad6d", //Spotify Client Secret
  },
};
