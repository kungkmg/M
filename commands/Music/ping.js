const { EmbedBuilder, } = require('discord.js');
const { version } = require('../../package.json')

module.exports = { 
    config: {
        name: "ping",
        aliases: ["ping", "p"],
        description: "Pause song in queue!",
        accessableby: "Member",
        category: "Music",
    },
    run: async (client, message, args) => {
        let msg = await message.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: 'กรุณารอสักครู่', iconURL: 'https://cdn.discordapp.com/attachments/1048443514297532457/1051304130175574067/loading.gif'})
                    .setDescription(`เรากำลังโหลดข้อมูลจาก API`)
                    .setColor("#000080")
                    .setTimestamp()
                    .setFooter({ text: `Maki Hosting - ขณะนี้บอทอยู่ในเวอร์ชั่น ${version} `, iconURL: 'https://cdn.discordapp.com/attachments/950770133972971558/1044540051624833025/download20221102160855.png' })
            ]
        })
        const ping = new EmbedBuilder()
            .setAuthor({ name: '⌛ ความหน่วงของบอท ณ ขณะนี้!'})
            .setDescription(`เวลาในการตอบสนองข้อความ ${msg.createdTimestamp - message.createdTimestamp}ms\nเวลาในการตอบสนองของ API ${Math.round(client.ws.ping)}ms.`)
            .setColor("#000080")
            .setTimestamp()
            .setFooter({ text: `Teeraphat_CH Manager - ขณะนี้บอทอยู่ในเวอร์ชั่น ${version} `, iconURL: 'https://cdn.discordapp.com/avatars/700583329111474208/8af2e7cd4717257d43375ca34830a7e6.png' });


        setTimeout(function () {
            msg.edit({ embeds: [ping] });
        }, 1000 /* ปรับดีเลย์เอาเอง หรือไม่ต้องใส่;ก็ได้*/);
    }
};