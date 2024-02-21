import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

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
bot.on(message("web_app_data"), async ctx => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`Your message: ${data?.feedback} `??'empty data');
});
bot.launch();
