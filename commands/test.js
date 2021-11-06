const { SlashCommandBuilder } = require('@discordjs/builders');

const cmd = new SlashCommandBuilder()
    .setName('test')
    .setDescription('I\'m tired');

async function action(interaction) {
    return interaction.reply('Success!');
}

module.exports = {
    data: cmd,
    execute: action,
};
