const {GuildMember, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remind',
    description: 'Remind a user',
    options: [
      {
        name: 'time',
        type: ApplicationCommandOptionType.Integer,
        description: 'Time in seconds until reminded'
        required: true,
      },
      {
        name: 'reminder',
        type: ApplicationCommandOptionType.String,
        description: 'Message to remind you in N seconds',
        required: true,
      }
    ],
    async execute(interaction, player) {

    }

}