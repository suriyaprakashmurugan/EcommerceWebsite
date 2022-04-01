import React, { useState, useEffect } from "react";
import './task5.css';
import TaskNav from './taskNv';
// import Navbar from 'responsive-react-js-navbar';

export default function Task5()  {
    // const links = [{
    //     "href": "",
    //     "label": "Home",
    //     "background": false,
    // },
    // {
    //     "href": "",
    //     "label": "Login",
    //     "background": false,
    // },
    // {
    //     "href": "",
    //     "label": "Register",
    //     "background": true,
    // }
    // ];
    const questions = [
        {
            question:"question1",
            options:['option1','option2', 'option3', 'option4'],
            ans:1,
        },
        {
            question:"question2",
            options:['option1','option2', 'option3', 'option4'],
            ans:2,
        },
        {
            question:"question3",
            options:['option1','option2', 'option3', 'option4'],
            ans:3,
        },

    ]
    
    const [idxObject, setIdxObject] = useState(0);
    const currentQuestion = questions[idxObject];
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const nextQuestion = (idx) => {
        if(currentQuestion.ans === idx)
        {
            setScore(score+1)
        }
        const totalIdx = idxObject+1;
        if (totalIdx < questions.length){
        setIdxObject(idxObject+1)
        }
        else{
            setShowScore(true)
        }
    }
    
    const resetQus = () => {
        setShowScore(false)
        setIdxObject(0)
        setScore(0)
    }

    return (
        
            // <Navbar
            //     logo='https://svgshare.com/i/KHh.svg'
            //     logoHref='/where-logo-click-redirect'
            //     links={links}
        
            // />


      
    <div className="container-ful">    
         <TaskNav/>
        {showScore?(<>
        <h1 className="qus-header">your Score is:{score}</h1>
        <button className="btnAdd" onClick={resetQus}>Try again</button>
        </>):(
             <div className="qus-card">
             <div className="qus-header">
                 <h1>{currentQuestion.question}</h1>
             </div>
             <ul className="qus-content">
                    {currentQuestion.options.map((option, i)=>{return <li onClick={() => nextQuestion(i)}>{option}</li>})}              
             </ul>
         </div>
        )}
       
    </div>
  )
}

