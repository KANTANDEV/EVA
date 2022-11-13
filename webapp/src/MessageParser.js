// import axios from 'axios'
// import ConfigIa from '../src/components/ConfigIa.js'
const { Configuration, OpenAIApi } = require('openai')
// MessageParser starter code
class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider
		this.state = state
	}

	// on cree la fonction qui envois le message a l'api
	async parse(message) {
		const configuration = new Configuration({
			apiKey: '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',
		})
		const openai = new OpenAIApi(configuration)

		let res

		const response = await openai.createCompletion({
			model: 'text-davinci-002',
			prompt: "Ce qui suit est une conversation avec un assistant IA. L'assistant est serviable, créatif, intelligent et très sympathique.Il est un soutiens émotionnel pour son utilisateur il aide a calmer l'anxiété et les crise de panic.L'assistant est très cultiver.\n\nVous: Bonjour qui êtes vous ?\nEVA: Je suis Éva une intelligence artificielle basée sur GPT3 de Open Ai, j'ai été configurer pour vous aider et vous assister dans votre vie de tous les jours \n\n" + message,
			temperature: 0.9,
			max_tokens: 150,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0.6,
			stop: [' Human:', ' AI:', 'EVA:', 'Vous:'],
		})

		if (response.data.choices[0].text === '' || response.data.choices[0].text === ' ' || response.data.choices[0].text === null || response.data.choices[0].text === undefined || response.data.choices[0].text === '\n\n' || response.data.choices[0].text === '\n') {
			res = response.data.choices[0].text
			res = "Je n'ai pas compris votre demande"
		} else {
			res = response.data.choices[0].text
		}

		console.log(response.data.choices[0].text)
		console.log(response)

		this.actionProvider.responseHandler(res)
	}
}

export default MessageParser
