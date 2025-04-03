import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const firstName = msg.from.first_name || "Foydalanuvchi";
  bot.sendMessage(msg.chat.id, `Assalomu alaykum, ${firstName}!`);
});
