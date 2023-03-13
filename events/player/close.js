module.exports = async (client, name, code, reason) => {
    console.warn(`กำลังเขื่อมต่อ | ${name}: ปิดรหัสแล้วนะคัับ ${code}, Reason ${reason || 'No reason'}`);
}