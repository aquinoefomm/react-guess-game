import characters from "./database";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [chosenCharacter, setChosenCharacter] = useState({});
  const [answerFeedback, setAnswerFeedback] = useState("");
  const [input, setInput] = useState("");
  const [questionsLeft, setQuestionsLeft] = useState(10);

  useEffect(() => {
    setChosenCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
    setScore(Number(retrieveData("@score")));
    setQuestionsLeft(
      retrieveData("@questions-left")
        ? Number(retrieveData("@questions-left"))
        : 10
    );
  }, [chosenCharacter]);

  // Save score on localStore:
  function saveDataToLocalStorage(tag, value) {
    localStorage.setItem(tag, JSON.stringify(value));
  }

  function retrieveData(chave) {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
  }
  //----------------------

  function submitAnswer(event) {
    event.preventDefault();
    if(!input){
      alert('Please fill up your answer');
      return;
    }
    if (input.toUpperCase().trim() === chosenCharacter.name) {
      setScore(score + 1);
      saveDataToLocalStorage("@score", String(score + 1));
      setAnswerFeedback(`You got it! 🤩 I'm "${chosenCharacter.name}"`);
    } else {
      setAnswerFeedback(`Wrong answer! 😕 I'm "${chosenCharacter.name}"`);
    }
    setQuestionsLeft(questionsLeft === 0? 0 : questionsLeft - 1)
    saveDataToLocalStorage('@questions-left', String(questionsLeft - 1));
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    if (questionsLeft <= 0) {
      setTimeout(() => {
        alert(`End of game! \nYour score: ${Number(retrieveData("@score"))}`);
        localStorage.clear();
      }, 2000);
      
    }
    console.log(questionsLeft);
  }

  function handleChange(event) {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Score: {score}</h2>
      </div>
      <div className="container">
        <h1>Questions left: {questionsLeft}</h1>
        <h1>{answerFeedback === ''? "Who am I?": answerFeedback}</h1>
        <img src={chosenCharacter.img} alt={chosenCharacter.name} />
        <form onSubmit={submitAnswer}>
          <input
            onChange={handleChange}
            type="text"
            id="answer"
            name="fav_language"
            placeholder="Your answer"
            value={input}
            required
          />
          <br />
          <button onClick={submitAnswer}>Submit answer</button>
        </form>
      </div>
      <div>
            <footer className="social-icons">
                <a href="https://www.linkedin.com/in/everton-peres-bb6694101/" target="_blank" className="fab fa-linkedin fa-2x"></a>
                <a href="https://github.com/aquinoefomm" target="_blank" className="fab fa-github fa-2x"></a><br />
                
            </footer>
            <p>Dedicated to my son <strong>Lucas Ávila</strong></p>
            <p>Developed with love by <strong>Everton de Aquino Peres</strong></p>
        </div>
    </div>
  );
}

export default App;
