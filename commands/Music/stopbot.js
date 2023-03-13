const { EmbedBuilder } = require('discord.js');
const { OWNER_ID } = require('../../settings/config.js');

module.exports = { 
    config: {
        name: "stopbot",
        aliases: ["pt", "p"],
        description: "Pause song in queue!",
        accessableby: "Member",
        category: "Music",
    },
    run: async (client, message, args) => {
        const NotOwner = new EmbedBuilder()
            .setAuthor({ name: 'ระบบการแจ้งเตือน' })
            .setDescription(`คุณไม่ใช้เจ้าของบอทนะเจ้าของตัวจริงๆคือ <@${OWNER_ID}>`)
            .setColor("Yellow")
            .setImage('https://cdn.discordapp.com/attachments/950770133972971558/1000924373684863056/standard_5.gif')
            .setTimestamp()
            .setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

        if (message.author.id != OWNER_ID) return message.channel.send({ embeds: [NotOwner] })
        const restart = new EmbedBuilder()
            .setAuthor({ name: 'ระบบการแจ้งเตือน' })
            .setDescription("เราได้ปิดบอทเรียบร้อยแล้ว")
            .setColor("Yellow")
            .setImage('https://cdn.discordapp.com/attachments/950770133972971558/1000924373684863056/standard_5.gif')
            .setTimestamp()
            .setFooter({ text: 'ขอบคุณผู้สนับสนุนโดย LSP-Hosting', iconURL: 'https://cdn.discordapp.com/attachments/961883426112286731/1013442567955812352/LSPJiBi-T.png' });

        await message.channel.send({ embeds: [restart] });
        console.log(`[COMMANDS - STOPBOT] Shutting down`);

        process.exit();
    }
};