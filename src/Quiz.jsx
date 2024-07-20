import React, { useState } from 'react'
import { useEffect } from 'react';

const Quiz2 = () => {
  const questions = [
    {
      question: "HTML stands for?",
      options: ["HyperText", "Hyperlink", "Home Tool", "Hyperlinking"],
      answer: "HyperText"
    },
    {
      question: "Which Language is used for styling web pages?",
      options: ["HTML", "CSS", "JS", "XML"],
      answer: "CSS"
    },
    {
      question: "Which language Not a JavaScript framework?",
      options: ["JQuery", "Django", "Angular", "NodeJS"],
      answer: "Django"
    },
    {
      question: "Which Language Used to connect to a database?",
      options: ["PHP", "HTML", "JS", "CSS"],
      answer: "PHP"
    },
    {
      question: "Which language Server-side JavaScript framework?",
      options: ["React", "Vue", "Node.js", "Angular"],
      answer: "Node.js"
    }, 
    {
      question: "Which HTML tag is used to display a list of items?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "Which property is used to set the font size in CSS?",
      options: ["font-size", "font-weight", "text-size", "font-style"],
      answer: "font-size"
    },
    {
      question: "Which HTML element is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>"
    },
    {
      question: "Which of the following is used to create form in HTML?",
      options: ["<form>", "<input>", "<button>", "<fieldset>"],
      answer: "<form>"
    },
    {
      question: "Which JavaScript method converts a string to an array?",
      options: ["split()", "join()", "slice()", "toArray()"],
      answer: "split()"
    },
    
  ];
  const [score, setScore] = useState(0);
  const [showscore, setshowscore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedoption, setSelectedOption] = useState(null);
  const [timeleft,settimeleft] = useState(120)
  const handleSelectionOption = (option) => {
    setSelectedOption(option);
  }
useEffect(()=>{
if(timeleft === 0){
  setshowscore(true);
}else{
  const showCountdown = setTimeout(() => {
    settimeleft(timeleft-1);
  }, 1000);
}
});
  const handleUpdateScoreAndMoveOnNextQuestion = () => {
    if (selectedoption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const NextQuestion = currentQuestion + 1;
    if (NextQuestion < questions.length) {
      setCurrentQuestion(NextQuestion);
      setSelectedOption(null);
    } else {
      setshowscore(true);
    }
  }
  return (
    <>
      <div className='quiz'>

        {showscore ? (
          <div className='score-section'>
            Your Score is {score} Out of {questions.length}
            <br />
            <br />
            <button id='buttonBack' onClick={() => window.location = 'https://zawwarquizapp.vercel.app/'}>Back</button>
          </div>
        ) : (
          
          <div className='question-section'>
            <div className='timer'>
            <b > Time Left: {Math.floor(timeleft / 60)}: {('0' + (timeleft%60)).slice(-2)}</b>
           </div>
            <div className="question-text">
              <h3>{questions[currentQuestion].question}</h3>
              <div className='answer-section'>
                {questions[currentQuestion].options.map((option, index) => (
                  <button  key={index} onClick={() =>handleSelectionOption(option)}>{option}</button>
                ))}
                <br />
                <button id='button' onClick={handleUpdateScoreAndMoveOnNextQuestion}>Next</button>
               
              </div>
            </div>
          </div>
        )}
        <br />

      </div>

    </>
  )
}

export default Quiz2
