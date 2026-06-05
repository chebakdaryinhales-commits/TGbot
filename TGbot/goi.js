/*const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    return ctx.reply(
        'Крч, жми на сегодняшний день недели:',
        Markup.inlineKeyboard([
            [
                Markup.button.callback('Пндльник', 'day_monday'),
                Markup.button.callback('Втрник', 'day_tuesday')
            ],
            [
                Markup.button.callback('Среда чуваки!', 'day_wednesday'),
                Markup.button.callback('Четерег', 'day_thursday')
            ],
            [
                Markup.button.callback('Пятица', 'day_friday'),
                Markup.button.callback('Сбт', 'day_saturday')
            ],
            [
                Markup.button.callback('Вс', 'day_sunday')
            ]
        ])
    );
});


function sendMoodKeyboard(ctx, dayName) {
    return ctx.reply(
        'Какое сегодня настроение?',
        Markup.inlineKeyboard([
            [
                
                Markup.button.callback('Все класс', `mood_good_${dayName}`),
                Markup.button.callback('Помираю...', `mood_bad_${dayName}`)
            ]
        ])
    );
}


bot.action('day_monday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'monday');
});

bot.action('day_tuesday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'tuesday');
});

bot.action('day_wednesday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'wednesday');
});

bot.action('day_thursday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'thursday');
});

bot.action('day_friday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'friday');
});

bot.action('day_saturday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'saturday');
});

bot.action('day_sunday', async (ctx) => {
    await ctx.answerCbQuery();
    await sendMoodKeyboard(ctx, 'sunday');
});



// --- ПОНЕДЕЛЬНИК ---
bot.action('mood_good_monday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/4f/f7/c2/4ff7c24ca248b3875dbd5bf28f9aeb5a.jpg' },
        { caption: 'Понедельник и хорошее настроение? Ты псих' }
    );
});
bot.action('mood_bad_monday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/9e/bb/94/9ebb94533b7c37f31e3c39e6dfb6a2e9.jpg' },
        { caption: 'Начало недели? Ну ты лох...' }
    );
});

// --- ВТОРНИК ---
bot.action('mood_good_tuesday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/dd/0b/87/dd0b871a30940edc926502522dafa575.jpg' },
        { caption: 'Вторник идет неплохо,' }
    );
});
bot.action('mood_bad_tuesday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/c1/bc/1e/c1bc1ef7bb112b3bc98613d0cd965f1c.jpg' },
        { caption: 'Только второй день? Все равно лох...' }
    );
});

// --- СРЕДА ---
bot.action('mood_good_wednesday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/4b/77/cb/4b77cb290bda50fd5180d5b1c7526595.jpg' },
        { caption: 'СРЕДА, ЧУВАКИ!!!' }
    );
});
bot.action('mood_bad_wednesday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/7d/fa/8c/7dfa8cb7018336547d3a0880b211a3ed.jpg' },
        { caption: 'Даже среда не радует чувака...' }
    );
});

// --- ЧЕТВЕРГ ---
bot.action('mood_good_thursday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/37/6b/f6/376bf63e48d6ad57c1e8f89112e3bc0b.jpg' },
        { caption: 'Второй лучший день недели!' }
    );
});
bot.action('mood_bad_thursday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/bf/b3/48/bfb348df18c81732cafd0efbe8fc660e.jpg' },
        { caption: '............ ну и по' }
    );
});

// --- ПЯТНИЦА ---
bot.action('mood_good_friday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/c8/15/49/c815493ed96ecbaa5329a0e581e92883.jpg' },
        { caption: 'ЛУЧШИЙ ДЕНЬ НЕДЕЛИ!!' }
    );
});
bot.action('mood_bad_friday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/4e/04/f8/4e04f80341aac22831c13d4a53964852.jpg' },
        { caption: '... ах да, забыл что ты школьник и в субботу в школу...' }
    );
});

// --- СУББОТА ---
bot.action('mood_good_saturday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/4f/af/fd/4faffd5e641e284e1045455599af8505.jpg' },
        { caption: 'ну...... выходные... иди гуляйю' }
    );
});
bot.action('mood_bad_saturday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/fa/ac/80/faac8092d7975c1b2577325e9e7b0828.jpg' },
        { caption: 'Контроша по матеше была?' }
        
    );
});

// --- ВОСКРЕСЕНЬЕ ---
bot.action('mood_good_sunday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/236x/26/ff/fe/26fffe4ec092adcd5282f638b5bd5abe.jpg' },
        { caption: 'СПИДРААААН!!!!' }
    );
});
bot.action('mood_bad_sunday', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(
        { url: 'https://i.pinimg.com/736x/0b/6c/44/0b6c44a2bb3e369362c57911c66fbcc9.jpg' },
        { caption: 'ну все......' }
    );
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));*/


const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const contentData = {
    monday: {
        good: { caption: 'Понедельник и хорошее настроение? Ты псих', url: 'https://i.pinimg.com/736x/4f/f7/c2/4ff7c24ca248b3875dbd5bf28f9aeb5a.jpg' },
        bad: { caption: 'Начало недели? Ну ты лох...', url: 'https://i.pinimg.com/236x/9e/bb/94/9ebb94533b7c37f31e3c39e6dfb6a2e9.jpg' }
    },
    tuesday: {
        good: { caption: 'Вторник идет неплохо,', url: 'https://i.pinimg.com/236x/dd/0b/87/dd0b871a30940edc926502522dafa575.jpg' },
        bad: { caption: 'Только второй день? Все равно лох...', url: 'https://i.pinimg.com/736x/c1/bc/1e/c1bc1ef7bb112b3bc98613d0cd965f1c.jpg' }
    },
    wednesday: {
        good: { caption: 'СРЕДА, ЧУВАКИ!!!', url: 'https://i.pinimg.com/736x/4b/77/cb/4b77cb290bda50fd5180d5b1c7526595.jpg' },
        bad: { caption: 'Даже среда не радует чувака...', url: 'https://i.pinimg.com/236x/7d/fa/8c/7dfa8cb7018336547d3a0880b211a3ed.jpg' }
    },
    thursday: {
        good: { caption: 'Второй лучший день недели!', url: 'https://i.pinimg.com/736x/37/6b/f6/376bf63e48d6ad57c1e8f89112e3bc0b.jpg' },
        bad: { caption: '............ ну и по', url: 'https://i.pinimg.com/236x/bf/b3/48/bfb348df18c81732cafd0efbe8fc660e.jpg' }
    },
    friday: {
        good: { caption: 'ЛУЧШИЙ ДЕНЬ НЕДЕЛИ!!', url: 'https://i.pinimg.com/736x/c8/15/49/c815493ed96ecbaa5329a0e581e92883.jpg' },
        bad: { caption: '... ах да, забыл что ты школьник и в субботу в школу...', url: 'https://i.pinimg.com/236x/4e/04/f8/4e04f80341aac22831c13d4a53964852.jpg' }
    },
    saturday: {
        good: { caption: 'ну...... выходные... иди гуляйю', url: 'https://i.pinimg.com/736x/4f/af/fd/4faffd5e641e284e1045455599af8505.jpg' },
        bad: { caption: 'Контроша по матеше была?', url: 'https://i.pinimg.com/236x/fa/ac/80/faac8092d7975c1b2577325e9e7b0828.jpg' }
    },
    sunday: {
        good: { caption: 'СПИДРААААН!!!!', url: 'https://i.pinimg.com/236x/26/ff/fe/26fffe4ec092adcd5282f638b5bd5abe.jpg' },
        bad: { caption: 'ну все......', url: 'https://i.pinimg.com/736x/0b/6c/44/0b6c44a2bb3e369362c57911c66fbcc9.jpg' }
    }
};

bot.start((ctx) => {
    return ctx.reply(
        'Крч, жми на сегодняшний день недели:',
        Markup.inlineKeyboard([
            [Markup.button.callback('Пндльник', 'day_monday'), Markup.button.callback('Втрник', 'day_tuesday')],
            [Markup.button.callback('Среда чуваки!', 'day_wednesday'), Markup.button.callback('Четерег', 'day_thursday')],
            [Markup.button.callback('Пятица', 'day_friday'), Markup.button.callback('Сбт', 'day_saturday')],
            [Markup.button.callback('Вс', 'day_sunday')]
        ])
    );
});


bot.action(/^day_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const dayName = ctx.match[1]; 
    
    await ctx.reply(
        'Какое сегодня настроение?',
        Markup.inlineKeyboard([
            [
                Markup.button.callback('Все класс', `mood_good_${dayName}`),
                Markup.button.callback('Помираю...', `mood_bad_${dayName}`)
            ]
        ])
    );
});

bot.action(/^mood_(good|bad)_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const mood = ctx.match[1]; 
    const day = ctx.match[2];  

    const data = contentData[day]?.[mood];
    
    if (data) {
        await ctx.replyWithPhoto({ url: data.url }, { caption: data.caption });
    } else {
        await ctx.reply('Что-то пошло не так...');
    }
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
