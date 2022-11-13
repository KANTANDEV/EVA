// ActionProvider starter code
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage, ...rest) {
		this.createChatBotMessage = createChatBotMessage
		this.setState = setStateFunc
		this.createClientMessage = createClientMessage
		this.stateRef = stateRef
		this.createCustomMessage = createCustomMessage
	}

	responseHandler = (res) => {
		const message = this.createChatBotMessage(res)
		this.setChatBotMessage(message)
	}

	setChatBotMessage = (message) => {
		this.setState((state) => ({ ...state, messages: [...state.messages, message] }))
	}
}

export default ActionProvider
