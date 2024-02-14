const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}`;

export async function sendMessage(chatId, text) {
    const url = `${TELEGRAM_API_URL}/sendMessage`;

    const params = new URLSearchParams({
        chat_id: chatId,
        text: text,
        parse_mode: 'html'
    });

    try {
        const response = await fetch(`${url}?${params}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        throw error;
    }
}