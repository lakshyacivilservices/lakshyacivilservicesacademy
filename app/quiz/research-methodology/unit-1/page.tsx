"use client";

import { useState } from "react";

const questions = [
  {
    question: "Research is a process of:",
    options: [
      "Guessing",
      "Systematic investigation",
      "Entertainment",
      "Random thinking",
    ],
    answer: "Systematic investigation",
  },
  {
    question: "Which is a characteristic of research?",
    options: [
      "Subjectivity",
      "Systematic approach",
      "Randomness",
      "Bias",
    ],
    answer: "Systematic approach",
  },
  {
    question: "Basic research is also called:",
    options: [
      "Pure research",
      "Action research",
      "Survey research",
      "Field research",
    ],
    answer: "Pure research",
  },
  {
    question: "Research that solves immediate problems is:",
    options: [
      "Fundamental research",
      "Applied research",
      "Historical research",
      "Descriptive research",
    ],
    answer: "Applied research",
  },
  {
    question: "Positivism is mainly associated with:",
    options: [
      "Scientific method",
      "Religious belief",
      "Mythology",
      "Intuition only",
    ],
    answer: "Scientific method",
  },
  {
    question: "Post-positivism accepts:",
    options: [
      "Absolute truth",
      "Multiple realities",
      "No research",
      "Only experiments",
    ],
    answer: "Multiple realities",
  },
  {
    question: "Qualitative research focuses on:",
    options: [
      "Numerical data",
      "Statistical analysis",
      "Meanings and experiences",
      "Graphs only",
    ],
    answer: "Meanings and experiences",
  },
  {
    question: "Quantitative research mainly uses:",
    options: [
      "Words",
      "Numerical data",
      "Stories",
      "Opinions only",
    ],
    answer: "Numerical data",
  },
  {
    question: "Experimental research involves:",
    options: [
      "Manipulation of variables",
      "Historical facts",
      "No hypothesis",
      "Random observations",
    ],
    answer: "Manipulation of variables",
  },
  {
    question: "Historical research studies:",
    options: [
      "Future predictions",
      "Past events",
      "Laboratory data",
      "Numerical surveys",
    ],
    answer: "Past events",
  },
  {
    question: "Descriptive research describes:",
    options: [
      "Current situations",
      "Future events",
      "Dreams",
      "Random opinions",
    ],
    answer: "Current situations",
  },
  {
    question: "Research ethics mainly deals with:",
    options: [
      "Honesty in research",
      "Entertainment",
      "Marketing",
      "Politics",
    ],
    answer: "Honesty in research",
  },
  {
    question: "Plagiarism means:",
    options: [
      "Original writing",
      "Copying without credit",
      "Research method",
      "Data analysis",
    ],
    answer: "Copying without credit",
  },
  {
    question: "APA style is used for:",
    options: [
      "Referencing",
      "Cooking",
      "Programming",
      "Architecture",
    ],
    answer: "Referencing",
  },
  {
    question: "A hypothesis is:",
    options: [
      "A tentative statement",
      "Final conclusion",
      "Random guess",
      "Fact only",
    ],
    answer: "A tentative statement",
  },
  {
    question: "Sampling means:",
    options: [
      "Selecting a group",
      "Full census only",
      "Random guessing",
      "Data deletion",
    ],
    answer: "Selecting a group",
  },
  {
    question: "Primary data is:",
    options: [
      "Collected first-hand",
      "Copied from books",
      "Old information",
      "Historical records only",
    ],
    answer: "Collected first-hand",
  },
  {
    question: "Secondary data comes from:",
    options: [
      "Published sources",
      "Direct observation only",
      "Experiments only",
      "Laboratories only",
    ],
    answer: "Published sources",
  },
  {
    question: "Research problem should be:",
    options: [
      "Clear and specific",
      "Confusing",
      "Impossible",
      "Unrelated",
    ],
    answer: "Clear and specific",
  },
  {
    question: "ICT in research helps in:",
    options: [
      "Data analysis",
      "Communication",
      "Online research",
      "All of these",
    ],
    answer: "All of these",
  },
  {
    question: "A research design is:",
    options: [
      "A financial plan",
      "Blueprint of research",
      "Type of computer",
      "Marketing strategy",
    ],
    answer: "Blueprint of research",
  },
  {
    question: "Census study includes:",
    options: [
      "Entire population",
      "Only sample",
      "Only teachers",
      "Only students",
    ],
    answer: "Entire population",
  },
  {
    question: "Observation method is mainly used in:",
    options: [
      "Experimental research",
      "Field studies",
      "Numerical analysis only",
      "Auditing",
    ],
    answer: "Field studies",
  },
  {
    question: "Interview schedule is used for:",
    options: [
      "Data collection",
      "Entertainment",
      "Programming",
      "Accounting",
    ],
    answer: "Data collection",
  },
  {
    question: "Questionnaire is commonly used in:",
    options: [
      "Survey research",
      "Chemical testing",
      "Machine learning",
      "Auditing",
    ],
    answer: "Survey research",
  },
];

export default function ResearchMethodologyUnit1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

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
    <main
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        UGC NET Research Methodology Quiz - Unit 1
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