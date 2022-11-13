/// Config starter code
import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from './components/BotAvatar'

const config = {
	initialMessages: [createChatBotMessage(`Bonjour, je suis EVA, Que puis-je faire pour vous ?`)],
	botName: 'EVA',
	customComponents: {
		botAvatar: (props) => <BotAvatar {...props} />,
	},
}

export default config
