import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {activeLanguage: languageGreetingsList[0]}

  getActiveLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="languages-container">
            {languageGreetingsList.map(eachLanguage => (
              <li
                className={`list-container ${
                  activeLanguage.buttonText === eachLanguage.buttonText &&
                  'active'
                }`}
                key={eachLanguage.id}
              >
                <button
                  type="button"
                  className={`language-button  ${
                    activeLanguage.buttonText === eachLanguage.buttonText &&
                    'active'
                  }`}
                  onClick={() => this.getActiveLanguage(eachLanguage)}
                >
                  {eachLanguage.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <img
            src={activeLanguage.imageUrl}
            alt={activeLanguage.imageAltText}
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default App
