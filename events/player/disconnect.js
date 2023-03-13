module.exports = async (client, name, players, moved) => {
    if (moved) return;
    players.map(player => player.connection.disconnect())
    console.warn(`กำลังเชื่อต่อ | ${name}: Disconnected`);
}