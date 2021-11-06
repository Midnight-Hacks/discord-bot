const { SlashCommandBuilder } = require('@discordjs/builders');

const { response } = require('../util/embed');

const cmd = new SlashCommandBuilder()
    .setName('test')
    .setDescription('I\'m tired');

async function action(interaction) {
    return;
}

module.exports = {
    data: cmd,
    execute: action,
};
