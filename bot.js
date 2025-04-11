
const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Oceanworld.aternos.me',
        port: 54623,
        username: 'oceanworldbot123',
        version: '1.16.5'
    });

    bot.on('spawn', () => {
        console.log('✅ Підключено до сервера');
        setTimeout(() => {
            bot.chat('/login 228');
            console.log('🔐 Відправлено логін');
        }, 3000);

        bot.setControlState('forward', true);
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 1000);
    });

    bot.on('end', () => {
        console.log('🔁 Бот відключений, повторне підключення через 10 секунд...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log(`❌ Помилка: ${err.code}`);
    });
}

createBot();

// Вебсервер для UptimeRobot
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Бот працює 24/7'));
app.listen(3000, () => console.log('🌐 Вебсервер запущений'));
