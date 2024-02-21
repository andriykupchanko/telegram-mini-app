import { Telegraf, Markup } from "telegraf";

const token = "6713815316:AAG4ekvQEVcdRq4Ii92dtKZ4xcwmvC9ID2I";
const webUrl = "https://angular-tg-app-16382.web.app/";
const bot = new Telegraf(token);

bot.start(ctx => {
  ctx.reply("Hello!");
  ctx.replyWithHTML(
    "Click the button below:",
    Markup.keyboard([Markup.button.webApp("Open WebApp", webUrl + "/feedback")])
  );
});

bot.launch();
