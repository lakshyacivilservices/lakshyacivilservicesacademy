"use client";

import { useEffect, useState } from "react";

const questions = [
  {
    question: "Who is known as the father of Scientific Management?",
    options: ["Elton Mayo", "F.W. Taylor", "Henry Fayol", "Barnard"],
    answer: "F.W. Taylor",
  },
  {
    question: "Scientific Management mainly focuses on:",
    options: [
      "Human relations",
      "Efficiency in work",
      "Motivation",
      "Leadership",
    ],
    answer: "Efficiency in work",
  },
  {
    question: "Which principle was given by F.W. Taylor?",
    options: [
      "Unity of Command",
      "Scalar Chain",
      "Science, not Rule of Thumb",
      "Equity",
    ],
    answer: "Science, not Rule of Thumb",
  },
  {
    question: "Functional foremanship is associated with:",
    options: ["Fayol", "Mayo", "Taylor", "Drucker"],
    answer: "Taylor",
  },
  {
    question: "Who proposed the 14 principles of management?",
    options: ["Taylor", "Barnard", "Fayol", "Mayo"],
    answer: "Fayol",
  },
  {
    question: "Unity of command means:",
    options: [
      "One boss for one worker",
      "Many bosses for one worker",
      "Workers control managers",
      "Teams work independently",
    ],
    answer: "One boss for one worker",
  },
  {
    question: "Scalar chain refers to:",
    options: [
      "Wage system",
      "Chain of communication",
      "Production line",
      "Employee hierarchy only",
    ],
    answer: "Chain of communication",
  },
  {
    question: "Which principle emphasizes team spirit?",
    options: [
      "Discipline",
      "Equity",
      "Esprit de Corps",
      "Centralization",
    ],
    answer: "Esprit de Corps",
  },
  {
    question: "Planning is:",
    options: [
      "Looking backward",
      "Staffing employees",
      "Deciding future course of action",
      "Controlling activities",
    ],
    answer: "Deciding future course of action",
  },
  {
    question: "Who is associated with Hawthorne Experiments?",
    options: ["Taylor", "Fayol", "Mayo", "Barnard"],
    answer: "Mayo",
  },
  {
    question: "The behavioural approach mainly studies:",
    options: [
      "Machines",
      "Human behavior",
      "Finance",
      "Production cost",
    ],
    answer: "Human behavior",
  },
  {
    question: "The systems approach views organization as:",
    options: [
      "Independent unit",
      "Closed entity",
      "Interrelated parts",
      "Informal group",
    ],
    answer: "Interrelated parts",
  },
  {
    question: "Contingency approach suggests:",
    options: [
      "One best way exists",
      "Management depends on situation",
      "Employees should dominate",
      "Authority should be avoided",
    ],
    answer: "Management depends on situation",
  },
  {
    question: "Decision making is primarily part of:",
    options: ["Planning", "Directing", "Staffing", "Controlling"],
    answer: "Planning",
  },
  {
    question: "Organising means:",
    options: [
      "Recruiting employees",
      "Arranging resources systematically",
      "Monitoring work",
      "Giving incentives",
    ],
    answer: "Arranging resources systematically",
  },
  {
    question: "Staffing includes:",
    options: ["Recruitment", "Selection", "Training", "All of these"],
    answer: "All of these",
  },
  {
    question: "Directing involves:",
    options: [
      "Guiding employees",
      "Auditing",
      "Budgeting",
      "Forecasting only",
    ],
    answer: "Guiding employees",
  },
  {
    question: "Controlling compares:",
    options: [
      "Workers and managers",
      "Actual and planned performance",
      "Sales and production",
      "Labour and capital",
    ],
    answer: "Actual and planned performance",
  },
  {
    question: "Coordination aims at:",
    options: [
      "Conflict creation",
      "Integration of efforts",
      "Centralization",
      "Discipline only",
    ],
    answer: "Integration of efforts",
  },
  {
    question: "Differential piece rate system was proposed by:",
    options: ["Fayol", "Taylor", "Barnard", "Mayo"],
    answer: "Taylor",
  },
  {
    question: "Which is not a Fayol principle?",
    options: ["Discipline", "Unity of Direction", "Time Study", "Equity"],
    answer: "Time Study",
  },
  {
    question: "Centralization refers to:",
    options: [
      "Delegation of power",
      "Concentration of authority",
      "Team management",
      "Group decision making",
    ],
    answer: "Concentration of authority",
  },
  {
    question: "Forecasting is related to:",
    options: ["Staffing", "Planning", "Controlling", "Directing"],
    answer: "Planning",
  },
  {
    question: "Span of control means:",
    options: [
      "Employee discipline",
      "Number of subordinates supervised",
      "Financial control",
      "Quality control",
    ],
    answer: "Number of subordinates supervised",
  },
  {
    question: "Delegation means:",
    options: [
      "Removing authority",
      "Sharing authority",
      "Ignoring responsibility",
      "Punishment system",
    ],
    answer: "Sharing authority",
  },
  {
    question: "Motivation is closely connected with:",
    options: ["Directing", "Staffing", "Budgeting", "Accounting"],
    answer: "Directing",
  },
  {
    question: "Feedback is important in:",
    options: [
      "Planning only",
      "Control process",
      "Staffing only",
      "Recruitment only",
    ],
    answer: "Control process",
  },
  {
    question: "Communication is mainly linked with:",
    options: ["Directing", "Accounting", "Budgeting", "Forecasting"],
    answer: "Directing",
  },
  {
    question: "Control process begins with:",
    options: [
      "Corrective action",
      "Setting standards",
      "Recruitment",
      "Inspection",
    ],
    answer: "Setting standards",
  },
  {
    question: "Coordination is required because of:",
    options: [
      "Division of work",
      "Profit only",
      "Technology only",
      "Salary issues",
    ],
    answer: "Division of work",
  },
];

export default function HRMQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        UGC NET HRM & PSU Exams Quiz - Unit 1
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        <div>Score: {score}</div>

        <div>
          Timer: {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentQuestion(index);
              setSelected("");
            }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              background:
                currentQuestion === index
                  ? "#2563eb"
                  : "#d1d5db",
              color:
                currentQuestion === index
                  ? "white"
                  : "black",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {showResult ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            background: "#f3f4f6",
            borderRadius: "15px",
          }}
        >
          <h2>Quiz Completed 🎉</h2>

          <h1>
            {score} / {questions.length}
          </h1>
        </div>
      ) : (
        <div
          style={{
            background: "#f9fafb",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <h3 style={{ marginTop: "20px" }}>
            {questions[currentQuestion].question}
          </h3>

          <div style={{ marginTop: "25px" }}>
            {questions[currentQuestion].options.map((option) => {
              let bg = "#2563eb";

              if (selected) {
                if (
                  option ===
                  questions[currentQuestion].answer
                ) {
                  bg = "green";
                } else if (option === selected) {
                  bg = "red";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "10px",
                    border: "none",
                    background: bg,
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {selected && (
            <button
              onClick={nextQuestion}
              style={{
                marginTop: "20px",
                padding: "14px 25px",
                border: "none",
                borderRadius: "10px",
                background: "#111827",
                color: "white",
                cursor: "pointer",
              }}
            >
              Next Question →
            </button>
          )}
        </div>
      )}
    </main>
  );
}