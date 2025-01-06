import React, {useState} from 'react'
import {data} from './data'
import './quizstyle.css'
export default function Quizapp(){
    const [index, setIndex] = useState(0);
const [option, setOption] = useState('');
const [finished, setFinish] = useState(false);
const [score, setScore] = useState(0);

const correctAnswers = [
    'Option2', // Question 1: Redux is State Management System
    'Option2', // Question 2: To manage and centralize application state
    'Option3', // Question 3: Single source of truth, state is read-only, changes are made with pure functions
    'Option2', // Question 4: An object that describes the change in the state
    'Option1', // Question 5: A pure function that takes the current state and an action and returns a new state
    'Option4', // Question 6: To hold and manage the application state
    'Option4', // Question 7: It allows interception of actions before they reach reducers
    'Option2', // Question 8: Redux-Saga or Redux-Thunk
    'Option1', // Question 9: To combine multiple reducers into a single reducer function
    'Option1'  // Question 10: It connects React components to the Redux store
];

    const handleNext = ()=> {
        if(correctAnswers[index] === option){
            setScore(score+1);
        }
        if (index < data.length-1){
            setIndex(index+1);
            setOption(null);
        } else {
            setFinish(true);
        }
        
    }
    if(finished){
        return (
            <div className='scorePage'>
            <h1>Quiz Finished</h1>
            <h3> Your Score is {score} out of {data.length}</h3>

            </div>
        )
    }
    const handleSelect = (optn)=> {
        setOption(optn);
    }
return (
    <div className = 'quiz'>
        <h1>{data[index].Question}</h1>
        <ul>
            <li className = {option === 'Option1' ? 'selected': ''}  
            onClick= {()=>{handleSelect('Option1')}}>{data[index].Option1}</li>

            <li className = {option === 'Option2' ? 'selected': ''} 
            onClick= {()=>{handleSelect('Option2')}}>{data[index].Option2}</li>

            <li className = {option === 'Option3' ? 'selected': ''} 
            onClick= {()=>{handleSelect('Option3')}}>{data[index].Option3}</li>

            <li className = {option === 'Option4' ? 'selected': ''} 
            onClick= {()=>{handleSelect('Option4')}}>{data[index].Option4}</li>

        </ul>
        <button onClick ={handleNext} disabled= {!option}>Next</button>
        <h5>Question of {index+1} of {data.length}</h5>
    </div>
)
}