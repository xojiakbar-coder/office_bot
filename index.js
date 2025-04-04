import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.setMyCommands([
  {
    command: "/start",
    description: "Lounch the bot",
  },
  {
    command: "/info",
    description: "Learn about us",
  },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    return bot.sendMessage(
      chatId,
      "Assalom Alaykum office bot ga xush kelibsiz"
    );
  }

  if (text === "/info") {
    return bot.sendMessage(chatId, "Bizning botimiz haqida ma'lumot");
  }
});
