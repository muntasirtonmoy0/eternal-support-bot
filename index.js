const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const app = express();

/* =========================
   KEEP RENDER ALIVE
========================= */
app.get("/", (req, res) => {
  res.send("Bot running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web server running");
});

/* =========================
   DISCORD CLIENT
========================= */
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

/* =========================
   READY
========================= */
client.once("ready", () => {
  console.log(`${client.user.tag} is online!`);
});

/* =========================
   MESSAGE COMMANDS
========================= */
client.on("messageCreate", async (message) => {

  if (message.author.bot) return;

  /* =========================
     .PAY COMMAND
  ========================= */
  if (message.content === ".pay") {

    return message.channel.send(
      "💰 **Payment Methods (Eternal SMP)**\n\n" +
      "📱 **Bkash 1 (Personal → Personal):** 01741644334\n" +
      "📱 **Bkash 2 (Agent / Personal → Personal):** 01768166414\n\n" +
      "🛒 Send screenshot in support ticket after payment!"
    );
  }

  /* =========================
     .RULES COMMAND
  ========================= */
  if (message.content === ".rules") {

    return message.channel.send(`
# 📜 Eternal SMP — Official Server Rules

━━━━━━━━━━━━━━

## 💬 1. Chat Rules

Keep the chat clean, friendly, and respectful. Toxicity, harassment, hate speech, discrimination, excessive swearing, spam, or inappropriate behavior is strictly prohibited.

━━━━━━━━━━━━━━

## 🎮 2. Fair Gameplay

Using cheats, hacks, x-ray, auto-clickers, exploits, dupes, modified clients, or any unfair advantages is not allowed. Play fairly and respect the survival experience.

━━━━━━━━━━━━━━

## 🏡 3. Community & Server Balance

Help keep the server enjoyable for everyone. Griefing, trolling, stealing, trapping players, intentionally ruining builds, or disturbing the community is not allowed.

━━━━━━━━━━━━━━

## 🚫 4. Banned Farms & Lag Machines

Do not build farms, redstone machines, chunk loaders, or structures that may cause excessive lag or harm server performance. Staff may remove lag-causing builds without warning.

━━━━━━━━━━━━━━

## 📢 5. Proper Channel Usage

Use channels correctly and avoid unnecessary spam, advertising, or disruptive behavior. Keep conversations meaningful and respectful.

━━━━━━━━━━━━━━

## 🎖️ 6. No Begging

Do not beg for ranks, items, money, permissions, staff roles, or special treatment from staff or players.

━━━━━━━━━━━━━━

## 🛡️ 7. Follow Discord Guidelines

All members must follow the official Discord Community Guidelines and Terms of Service at all times.

━━━━━━━━━━━━━━

## 🎤 8. Voice Chat Rules

Keep VC conversations friendly and appropriate. Mic spam, earrape, excessive background noise, harassment, or disturbing others is not allowed.

━━━━━━━━━━━━━━

## 💸 9. No Real Money Trading

Trading in-game items, accounts, or services for real money outside the official server store is strictly prohibited.

━━━━━━━━━━━━━━

## 🛒 10. Store & Rank Purchase Policy

• All purchases made through the official server store are final.
• Purchased ranks, kits, or items will be delivered after successful payment verification.
• Sharing or abusing paid perks may result in punishment or removal of perks.
• Chargebacks or fraudulent payments will result in a permanent blacklist from the server and store.

━━━━━━━━━━━━━━

## ❌ 11. Refund Policy

• No refunds will be given after ranks, items, or perks are delivered.
• Accidental purchases are the buyer’s responsibility.
• Breaking server rules after purchasing does NOT make you eligible for a refund.
• If you experience delivery issues, contact staff with valid proof.

━━━━━━━━━━━━━━

## ⚖️ 12. Punishment System

Punishments depend on the severity of the rule broken:

• Warning
• Mute
• Kick
• Temporary Ban
• Permanent Ban

Severe violations such as hacking, duping, scamming, or chargebacks may result in immediate permanent punishment without warning.

━━━━━━━━━━━━━━

## 🧠 13. Use Common Sense

Not every situation can be covered by rules. Use common sense and respect staff decisions to help maintain a positive and fair community.

━━━━━━━━━━━━━━

🌟 Welcome to Eternal SMP — survive, build, and enjoy together! 🌟
`);
  }

});

/* =========================
   LOGIN
========================= */
client.login(process.env.DISCORD_TOKEN);
