const { commands, eypz } = require('../lib/'); 

eypz({
    command: 'ping',
    category: 'mics',
    handler: async (sock, args, message) => {
        const { from } = message;
        const start = new Date().getTime();
        const edited = await sock.sendMessage(from, { text: '🏓 Pinging...' }, { quoted: message });

        const end = new Date().getTime();
        const TripTime = end - start;
        await sock.sendMessage(from, {
            text: `🏓 Pong!: \`${TripTime} ms`,
            edit: edited.key 
        });
    }
});
