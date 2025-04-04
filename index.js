import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.setMyCommands([
  {
    command: "/start",
    description: "Launch the bot",
  },
  {
    command: "/info",
    description: "Learn about us",
  },
]);

bot.on("message", async (msg) => {
  const text = msg.text?.toString();
  const chatId = msg.chat.id;

  if (!text) return;

  if (text === "/start") {
    return bot.sendMessage(
      chatId,
      "Assalomu alaykum, Office botga xush kelibsiz!"
    );
  }

  if (text === "/info") {
    return bot.sendMessage(chatId, "Bizning botimiz haqida ma'lumot.");
  }

  return bot.sendMessage(
    chatId,
    "Noma'lum buyruq. /start yoki /info ni kiriting."
  );
});
