const { sendEmbed } = require('../utils/helper');
const config = require('../utils/config');

module.exports = {
  name: 'slut',
  description: 'VIP command for Los Platos',
  async execute(message, args, channelConfig, client) {
    const hasPermission = message.member.roles.cache.some(role =>
      config.allowedRoleIds.includes(role.id)
    );
    if (!hasPermission) {
      return sendEmbed(
        message.channel,
        '#ff0000',
        'Permission Denied',
        'You do not have permission to use this command.'
      );
    }
    await sendEmbed(
      message.channel,
      '#0099ff',
      'Los Platos Sluts',
      `Hey Slutties, board at the gate and head to Los Platos to meet with the UC Hoster ${message.author}.`,
      config.images.slut
    );
  },
};
