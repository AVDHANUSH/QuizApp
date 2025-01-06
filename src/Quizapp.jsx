import React, {useState} from 'react'
import {data} from './data'
import './quizstyle.css'
export default function Quizapp(){
    const [index, setIndex] = useState(0);
const [option, setOption] = useState('');
const [finished, setFinish] = useState(false);
const [score, setScore] = useState(0);
const correctAnswers = []
    const handleNext = ()=> {
        if (index < data.length){
            setIndex(index+1);
            setOption(null);
        } else {
            setFinish(true);
        }
        
    }
    if(finished){
        return (
            <>
            <h1>Quiz Finished</h1>
            <h3> Your Score is {score} out of {data.length}</h3>

            </>
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