const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ching')
		.setDescription('Replies with Chong!'),
	async execute(interaction) {
		await interaction.reply('Chong!');
	},
};