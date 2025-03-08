import { useState } from 'react'
import './App.css'

function App() {
    const questionContent = {
      "0": {
        "question": "Start",
        "answer": "Press the next arrow to start the flashcards!",
        "difficulty": "easy",
        "time_period": "Intro"
      },
      "1": {
        "question": "What was the cause of World War I?",
        "answer": "A complex mix of nationalism, alliances, militarism, and the assassination of Archduke Franz Ferdinand in 1914.",
        "difficulty": "Medium",
        "time_period": "Early 20th century"
      },
      "2": {
        "question": "What was the Silk Road, and why was it important?",
        "answer": "A trade network connecting Asia, the Middle East, and Europe, spreading goods, ideas, and culture.",
        "difficulty": "Medium",
        "time_period": "Classical and Medieval periods"
      },
      "3": {
        "question": "What led to the fall of the Roman Empire?",
        "answer": "A combination of economic decline, invasions, and internal instability.",
        "difficulty": "Hard",
        "time_period": "Late Antiquity"
      },
      "4": {
        "question": "When did the Industrial Revolution begin?",
        "answer": "In the late 18th century, starting in Britain before spreading worldwide.",
        "difficulty": "Easy",
        "time_period": "Late 18th century to 19th century"
      },
      "5": {
        "question": "When did humans first land on the moon?",
        "answer": "July 20, 1969, during NASA's Apollo 11 mission.",
        "difficulty": "Easy",
        "time_period": "20th century"
      },
      "6": {
        "question": "When was the Great Wall of China built?",
        "answer": "Construction started as early as the 7th century BCE, with major expansions during the Ming Dynasty (1368–1644).",
        "difficulty": "Medium",
        "time_period": "Ancient to Early Modern periods"
      },
      "7": {
        "question": "Why did the Cold War happen?",
        "answer": "Tensions between the U.S. and the Soviet Union over political ideologies (capitalism vs. communism) after World War II.",
        "difficulty": "Medium",
        "time_period": "Mid-20th century"
      },
      "8": {
        "question": "Why did the French Revolution start?",
        "answer": "Economic hardship, inequality, and resentment toward monarchy and aristocracy led to revolution in 1789.",
        "difficulty": "Medium",
        "time_period": "Late 18th century"
      },
      "9": {
        "question": "Why did the Renaissance begin in Italy?",
        "answer": "Italy was wealthy from trade, had a strong classical heritage, and supported a culture of art and learning.",
        "difficulty": "Medium",
        "time_period": "14th to 17th century"
      },
      "10": {
        "question": "Where did the first human civilizations emerge?",
        "answer": "In Mesopotamia (modern-day Iraq), around 3100 BCE, with the Sumerians.",
        "difficulty": "Hard",
        "time_period": "Ancient History"
      },
      "11": {
        "question": "Where was the Declaration of Independence signed?",
        "answer": "Philadelphia, Pennsylvania, in 1776.",
        "difficulty": "Easy",
        "time_period": "18th century"
      },
      "12": {
        "question": "Where did the Titanic sink?",
        "answer": "In the North Atlantic Ocean, on April 15, 1912.",
        "difficulty": "Easy",
        "time_period": "Early 20th century"
      }
    }
    
    const [count, setCount] = useState(0)
    const [frontContent,setFrontContent] = useState(questionContent[count]["question"]);
    const [backContent,setBackContent] = useState(questionContent[count]["answer"]);
    const [timePeriod,setTimePeriod] = useState(questionContent[count]["time_period"]);
    

    const nextCard = () =>{
      setCount(Math.floor(Math.random() * 12) + 1)
      setFrontContent(questionContent[count]["question"]);
      setBackContent(questionContent[count]["answer"]);
      setTimePeriod(questionContent[count]["time_period"]);
    }
 

  return (
    
    
   <div className='app'>
      <div className='title'>
        <h1>The Ultimate World History Quiz</h1>
        <h3>Are You a History Buff?  Test Your Knowledge!</h3>
        <h4>Numbers of card : {Object.keys(questionContent).length - 1}</h4>
        <div className="theCard" >
          <div className = "theFront">
            {frontContent}
          </div>
          
          <div className = "theBack">
            <div>{backContent}</div>
            

            <p>Time-Period: {timePeriod}</p>
          </div>

          
        </div>

        <button onClick ={nextCard}>
          <img src="../images/left-arrow.svg"  alt="next"  className = "nextBtn"/>
        </button>
        <button onClick ={nextCard}>
          <img src="../images/right-arrow.svg"  alt="next" className = "nextBtn"/>
        </button>

      </div>
   </div>
  )
}

export default App
