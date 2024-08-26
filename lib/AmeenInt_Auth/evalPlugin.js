const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

module.exports = {
    handleMessage: async (conn, message) => {
        if (!message.message || !message.message.conversation) return;

        const body = message.message.conversation;
        const prefix = '.';
        if (!body.startsWith(prefix) || !body.startsWith(prefix + 'eval')) return;

        const args = body.slice(prefix.length + 4).trim();
        try {
            const { stdout, stderr } = await execPromise(args);
            if (stderr) {
                await conn.sendMessage(message.key.remoteJid, { text: `Error: ${stderr}` }, { quoted: message });
            } else {
                await conn.sendMessage(message.key.remoteJid, { text: `Output: ${stdout}` }, { quoted: message });
            }
        } catch (error) {
            await conn.sendMessage(message.key.remoteJid, { text: `Execution Error: ${error.message}` }, { quoted: message });
        }
    }
};
