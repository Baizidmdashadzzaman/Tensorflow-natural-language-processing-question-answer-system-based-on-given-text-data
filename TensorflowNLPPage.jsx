import React, {useRef, useEffect, useState} from 'react';

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";

import { Fragment } from 'react';

function TensorflowNLPPage() {

  const passageRef = useRef(null); 
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState(); 
  const [model, setModel] = useState(null); 

  const loadModel = async ()=>{
    const loadedModel = await qna.load()
    setModel(loadedModel); 
    console.log('Model loaded.')
  } 

  const answerQuestion = async (e) =>{
    if (e.which === 13 && model !== null ){
      console.log('Question submitted.')
      const passage = passageRef.current.value
      const question = questionRef.current.value

      const answers = await model.findAnswers(question, passage)
      setAnswer(answers); 
      console.log(answers)

    }  
  }

  useEffect(()=>{loadModel()}, [])

  return (
    <main  id="myTabContent" role="main" className="1 lg:flex lg:flex-1 lg:flex-col ">


<div>



<div className="relative ">


  <div className="relative overflow-x-clip">
    <img style={{position: 'absolute', width: 700, height: 700, left: '-15%', top: 0, opacity: '.75'}} src="/static/img/blur.svg" className="animate-pulse-slow" />
    <div className="relative mx-auto mt-2 max-w-5xl px-6">


<div className="mt-16 row">

<div className="col-lg-12 col-sm-12 mb-4" style={{width:'100%'}}>
    <div className="w-full bg-gray-850 rounded-xl mx-auto px-12 py-8" style={{boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.1)',width:'100%'}}>
    <h1 className="mx-auto max-w-4xl px-16 text-center text-3xl font-semibold leading-tight sm:text-3xl">
      Tensorflow NLP Powers Q&A
    </h1>

<div className="App">
      <header className="">
        {model ==null ? 
          <div>
            <div>Model Loading</div>      
            {/* <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}/> */}
          </div> 
          :  
          <React.Fragment>
            Passage
            <textarea ref={passageRef} rows="30" cols="100" className='transition-color block w-full max-w-[16rem] rounded-[10px] border-0 bg-gray-800 py-2.5 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-600 outline-none focus-visible:ring-1 focus-visible:ring-pink-400/50 sm:max-w-none'>
            My name is Baizid MD Ashadzzaman
my email is  baizid.md.ashadzzaman@gmail.com
and my address is Pahartoli 12 Quarter Hazi KalaMia Road, Chittagong.
my phone number is +8801862420119
my github address is https://github.com/Baizidmdashadzzaman
my gitlab is https://gitlab.com/ashad0167
my  website is https://baizidmdashadzzaman-next.vercel.app
my career objectives is given bellow 'I have been very passionate about computers and programming since my university life. I dream to be an expert software engineer so that I can build professional and useful software that has business
value. I am looking for a senior software engineer position in a reputed software company that can
help me to achieve my goal.'
            </textarea>
            Ask a Question
            <input ref={questionRef} onKeyPress={answerQuestion} size="80" className='transition-color block w-full max-w-[16rem] rounded-[10px] border-0 bg-gray-800 py-2.5 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-600 outline-none focus-visible:ring-1 focus-visible:ring-pink-400/50 sm:max-w-none'></input>
            <br /> 
            Your answers
            <br/>
            
            {answer?answer.map((ans, idx) =><div><b>Answer {idx+1} - </b> {ans.text} ({Math.floor(ans.score*100)/100})</div>) : " Nothing found"}
            
            </React.Fragment>
        } 
      </header>
    </div>
    

    </div>
  </div>

</div>

    </div>
  </div>

</div>


</div>

</main>
  )
}

export default TensorflowNLPPage
