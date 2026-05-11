"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function Page() {
  const questions = [
    {
      question: "Who proposed the 14 principles of management?",
      options: ["Taylor","Fayol","Mayo","Drucker"],
      answer: "Fayol",
    },
    {
      question: "Scientific Management was developed by?",
      options: ["Fayol","Taylor","Maslow","Herzberg"],
      answer: "Taylor",
    },
    {
      question: "Who developed Hierarchy of Needs?",
      options: ["Maslow","Taylor","Mayo","Fayol"],
      answer: "Maslow",
    },
  ];

  const [current,setCurrent] = useState(0);
  const [selected,setSelected] = useState("");
  const [score,setScore] = useState(0);
  const [timeLeft,setTimeLeft] = useState(30);

  useEffect(() => {
    if(timeLeft===0){nextQuestion();return;}
    const timer=setTimeout(()=>setTimeLeft(timeLeft-1),1000);
    return ()=>clearTimeout(timer);
  },[timeLeft]);

  const handleAnswer=(option:string)=>{
    if(selected)return;
    setSelected(option);
    if(option===questions[current].answer){
      setScore(score+1);
    }
  };

  const nextQuestion=()=>{
    setSelected("");
    setTimeLeft(30);
    if(current<questions.length-1){
      setCurrent(current+1);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#2563eb,#7c3aed,#ec4899)",
        padding:"40px 20px",
      }}>
        <div style={{
          maxWidth:"1200px",
          margin:"auto",
          display:"flex",
          gap:"25px",
          flexWrap:"wrap",
        }}>
          <div style={{
            width:"120px",
            background:"rgba(255,255,255,0.15)",
            backdropFilter:"blur(10px)",
            padding:"20px",
            borderRadius:"20px",
            color:"white",
          }}>
            <h3>Questions</h3>

            {questions.map((_,index)=>(
              <button
                key={index}
                onClick={()=>{
                  setCurrent(index);
                  setSelected("");
                  setTimeLeft(30);
                }}
                style={{
                  width:"100%",
                  padding:"12px",
                  marginBottom:"10px",
                  border:"none",
                  borderRadius:"10px",
                  background:current===index ? "#fff" : "rgba(255,255,255,0.2)",
                  color:current===index ? "#111827" : "white",
                  fontWeight:"bold",
                  cursor:"pointer",
                }}
              >
                {index+1}
              </button>
            ))}
          </div>

          <div style={{
            flex:1,
            background:"white",
            borderRadius:"25px",
            padding:"40px",
          }}>
            <h1 style={{fontSize:"50px"}}>
              HRM MCQ Quiz
            </h1>

            <div style={{
              display:"flex",
              gap:"15px",
              flexWrap:"wrap",
              marginBottom:"25px",
            }}>
              <div style={{
                background:"#2563eb",
                color:"white",
                padding:"12px 20px",
                borderRadius:"10px",
                fontWeight:"bold",
              }}>
                Question {current+1}/{questions.length}
              </div>

              <div style={{
                background:"#7c3aed",
                color:"white",
                padding:"12px 20px",
                borderRadius:"10px",
                fontWeight:"bold",
              }}>
                Timer: {timeLeft}s
              </div>

              <div style={{
                background:"#ec4899",
                color:"white",
                padding:"12px 20px",
                borderRadius:"10px",
                fontWeight:"bold",
              }}>
                Score: {score}
              </div>
            </div>

            <h2 style={{fontSize:"35px"}}>
              {questions[current].question}
            </h2>

            {questions[current].options.map((option,index)=>{
              let bg="linear-gradient(135deg,#dbeafe,#ede9fe)";

              if(selected){
                if(option===questions[current].answer){
                  bg="linear-gradient(135deg,#22c55e,#16a34a)";
                } else if(option===selected){
                  bg="linear-gradient(135deg,#ef4444,#dc2626)";
                }
              }

              return (
                <button
                  key={index}
                  onClick={()=>handleAnswer(option)}
                  style={{
                    width:"100%",
                    padding:"18px",
                    marginBottom:"15px",
                    border:"none",
                    borderRadius:"14px",
                    background:bg,
                    color:selected ? "white" : "#111827",
                    fontSize:"18px",
                    fontWeight:"bold",
                    cursor:"pointer",
                    textAlign:"left",
                  }}
                >
                  {option}
                </button>
              );
            })}

            {selected && current<questions.length-1 && (
              <button
                onClick={nextQuestion}
                style={{
                  marginTop:"20px",
                  padding:"16px 30px",
                  background:"linear-gradient(135deg,#2563eb,#7c3aed)",
                  color:"white",
                  border:"none",
                  borderRadius:"14px",
                  fontSize:"18px",
                  fontWeight:"bold",
                  cursor:"pointer",
                }}
              >
                Next Question →
              </button>
            )}

            {current===questions.length-1 && selected && (
              <div style={{
                marginTop:"30px",
                padding:"25px",
                borderRadius:"18px",
                background:"linear-gradient(135deg,#2563eb,#7c3aed)",
                color:"white",
              }}>
                <h2>
                  Final Score: {score}/{questions.length}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
