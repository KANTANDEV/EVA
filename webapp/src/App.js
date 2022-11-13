import './style/App.css'
//on importe la configuration du chatbot
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config.js'
import MessageParser from './MessageParser.js'
import ActionProvider from './ActionProvider.js'

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} headerText='EVA' />
			</div>
		</div>
	)
}

export default App

