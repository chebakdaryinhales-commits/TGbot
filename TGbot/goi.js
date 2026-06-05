const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();


const bot = new Telegraf(aaaaa.env.BOT-TOKEN);

bot.start((ctx) => {
    return ctx.reply(
    'Крч, жми на сегодняний день недели:',
    Markup.inlineKeyboard([
        [
            Markup.button.callback('Пндльник', 'btn_monday'),
            Markup.button.callback('Втрник', 'btn_tuesday'),
            Markup.button.callback('Среда чуваки!', 'btn_wednesday'),
            Markup.button.callback('Четерег', 'btn_thursday'),
            Markup.button.callback('Пятица', 'btn_friday'),
            Markup.button.callback('Сбт', 'btn_saturday'),
            Markup.button.callback('Вс', 'btn_sunday')
        ]
    ])
    );
});

bot.action('btn_monday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/4f/f7/c2/4ff7c24ca248b3875dbd5bf28f9aeb5a.jpg' },
    { caption: 'Начало неделти? Ну ты лох...' }   
    )
});

bot.action('btn_tuesday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/c1/bc/1e/c1bc1ef7bb112b3bc98613d0cd965f1c.jpg' },
    { caption: 'Только второй день? Все равно лох...' }   
    )
});

bot.action('btn_wednesday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/4b/77/cb/4b77cb290bda50fd5180d5b1c7526595.jpg' },
    { caption: 'СРЕДА, ЧУВАКИ!!!!' }   
    )
});

bot.action('btn_thursday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/37/6b/f6/376bf63e48d6ad57c1e8f89112e3bc0b.jpg' },
    { caption: 'Второй лучий день недели!' }   
    )
});

bot.action('btn_friday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/c8/15/49/c815493ed96ecbaa5329a0e581e92883.jpg' },
    { caption: 'ЛУЧШИЙ ДЕНЬ НЕДЕЛИ!!' }   
    )
});

bot.action('btn_saturday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/4f/af/fd/4faffd5e641e284e1045455599af8505.jpg' },
    { caption: 'ну...... выходные...' }   
    )
});

bot.action('btn_sunday', async (ctx) => {
    await ctx.answerCbQuery(); 

    await ctx.replyWithPhoto(
    { url: 'https://i.pinimg.com/736x/0b/6c/44/0b6c44a2bb3e369362c57911c66fbcc9.jpg' },
    { caption: 'ну все....' }   
    )
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
