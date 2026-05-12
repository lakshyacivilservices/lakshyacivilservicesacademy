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
  {
  question: "Research problem selection depends on:",
  options: [
    "Research interest",
    "Availability of data",
    "Feasibility",
    "All of these",
  ],
  answer: "All of these",
},
{
  question: "A good hypothesis should be:",
  options: [
    "Testable",
    "Confusing",
    "Lengthy",
    "Emotional",
  ],
  answer: "Testable",
},
{
  question: "Bibliography is generally placed:",
  options: [
    "Beginning",
    "Middle",
    "End",
    "Title page",
  ],
  answer: "End",
},
{
  question: "Cross-sectional research studies data at:",
  options: [
    "One point in time",
    "Different years only",
    "Historical periods",
    "Future dates",
  ],
  answer: "One point in time",
},
{
  question: "Longitudinal research studies:",
  options: [
    "Changes over time",
    "Only current data",
    "Only past records",
    "Single event",
  ],
  answer: "Changes over time",
},
{
  question: "Research report writing should be:",
  options: [
    "Logical",
    "Disorganized",
    "Emotional",
    "Biased",
  ],
  answer: "Logical",
},
{
  question: "An abstract summarizes:",
  options: [
    "Entire study briefly",
    "References only",
    "Tables only",
    "Graphs only",
  ],
  answer: "Entire study briefly",
},
{
  question: "The title of research should be:",
  options: [
    "Clear and concise",
    "Very lengthy",
    "Confusing",
    "Irrelevant",
  ],
  answer: "Clear and concise",
},
{
  question: "Research gap refers to:",
  options: [
    "Unexplored area",
    "Typing mistake",
    "Printing issue",
    "Formatting error",
  ],
  answer: "Unexplored area",
},
{
  question: "Empirical research is based on:",
  options: [
    "Observation and evidence",
    "Guesswork",
    "Myths",
    "Beliefs only",
  ],
  answer: "Observation and evidence",
},
{
  question: "Conceptual research focuses on:",
  options: [
    "Ideas and theories",
    "Numerical data only",
    "Chemical tests",
    "Accounting",
  ],
  answer: "Ideas and theories",
},
{
  question: "A variable that affects another variable is:",
  options: [
    "Independent variable",
    "Dependent variable",
    "Control variable",
    "Constant",
  ],
  answer: "Independent variable",
},
{
  question: "Research instruments include:",
  options: [
    "Questionnaires",
    "Schedules",
    "Interview guides",
    "All of these",
  ],
  answer: "All of these",
},
{
  question: "Coding in research means:",
  options: [
    "Assigning symbols to data",
    "Programming only",
    "Deleting responses",
    "Printing tables",
  ],
  answer: "Assigning symbols to data",
},
{
  question: "Data editing is done to:",
  options: [
    "Remove errors",
    "Increase mistakes",
    "Delete findings",
    "Avoid interpretation",
  ],
  answer: "Remove errors",
},
{
  question: "Frequency distribution shows:",
  options: [
    "Occurrence of values",
    "Only averages",
    "Only graphs",
    "Only hypotheses",
  ],
  answer: "Occurrence of values",
},
{
  question: "Pie chart is used for:",
  options: [
    "Graphical presentation",
    "Typing",
    "Coding",
    "Sampling",
  ],
  answer: "Graphical presentation",
},
{
  question: "Bar diagram represents:",
  options: [
    "Comparisons",
    "Narratives",
    "Stories",
    "Hypotheses",
  ],
  answer: "Comparisons",
},
{
  question: "Research findings should be:",
  options: [
    "Objective",
    "Biased",
    "Manipulated",
    "Hidden",
  ],
  answer: "Objective",
},
{
  question: "Inference means:",
  options: [
    "Drawing conclusions",
    "Typing data",
    "Deleting records",
    "Sampling only",
  ],
  answer: "Drawing conclusions",
},
{
  question: "Action research aims at:",
  options: [
    "Immediate improvement",
    "Historical analysis",
    "Future prediction",
    "Entertainment",
  ],
  answer: "Immediate improvement",
},
{
  question: "Survey method collects data from:",
  options: [
    "Respondents",
    "Machines only",
    "Books only",
    "Charts only",
  ],
  answer: "Respondents",
},
{
  question: "A sample should represent:",
  options: [
    "Population",
    "Researcher only",
    "One individual",
    "Only teachers",
  ],
  answer: "Population",
},
{
  question: "Research communication includes:",
  options: [
    "Publishing findings",
    "Ignoring results",
    "Destroying reports",
    "Avoiding discussion",
  ],
  answer: "Publishing findings",
},
{
  question: "The final stage of research is:",
  options: [
    "Report writing",
    "Sampling",
    "Hypothesis formulation",
    "Problem selection",
  ],
  answer: "Report writing",
},
  {
  question: "The deductive method proceeds from:",
  options: [
    "General to specific",
    "Specific to general",
    "Observation to theory",
    "Facts to assumptions",
  ],
  answer: "General to specific",
},
{
  question: "The inductive method proceeds from:",
  options: [
    "Specific to general",
    "General to specific",
    "Theory to observation",
    "Conclusion to hypothesis",
  ],
  answer: "Specific to general",
},
{
  question: "Research based on existing theories is called:",
  options: [
    "Analytical research",
    "Field survey",
    "Pilot research",
    "Action research",
  ],
  answer: "Analytical research",
},
{
  question: "The process of defining a problem clearly is:",
  options: [
    "Problem formulation",
    "Data coding",
    "Sampling",
    "Editing",
  ],
  answer: "Problem formulation",
},
{
  question: "Research conducted to gain familiarity with a phenomenon is:",
  options: [
    "Exploratory research",
    "Historical research",
    "Descriptive research",
    "Experimental research",
  ],
  answer: "Exploratory research",
},
{
  question: "The purpose of exploratory research is to:",
  options: [
    "Gain insights",
    "Test medicine",
    "Avoid hypotheses",
    "Create confusion",
  ],
  answer: "Gain insights",
},
{
  question: "A literature review helps identify:",
  options: [
    "Research gaps",
    "Printing errors",
    "Coding mistakes",
    "Typing speed",
  ],
  answer: "Research gaps",
},
{
  question: "The source closest to original information is:",
  options: [
    "Primary source",
    "Secondary source",
    "Tertiary source",
    "Magazine",
  ],
  answer: "Primary source",
},
{
  question: "A thesis is generally submitted for:",
  options: [
    "Academic degree",
    "Business marketing",
    "Political campaign",
    "Entertainment",
  ],
  answer: "Academic degree",
},
{
  question: "Peer review improves:",
  options: [
    "Research quality",
    "Typing speed",
    "Advertising",
    "Coding errors",
  ],
  answer: "Research quality",
},
{
  question: "Research ethics committees examine:",
  options: [
    "Ethical issues",
    "Salary structures",
    "Marketing plans",
    "Office design",
  ],
  answer: "Ethical issues",
},
{
  question: "A citation acknowledges:",
  options: [
    "Original sources",
    "Typing mistakes",
    "Advertisements",
    "Random ideas",
  ],
  answer: "Original sources",
},
{
  question: "The APA style was developed by:",
  options: [
    "American Psychological Association",
    "American Political Association",
    "Applied Physics Association",
    "Asian Psychological Academy",
  ],
  answer: "American Psychological Association",
},
{
  question: "Plagiarism detection software checks:",
  options: [
    "Copied content",
    "Network speed",
    "Image quality",
    "Audio files",
  ],
  answer: "Copied content",
},
{
  question: "Turnitin is commonly used for:",
  options: [
    "Plagiarism checking",
    "Video editing",
    "Statistical analysis",
    "Graphic design",
  ],
  answer: "Plagiarism checking",
},
{
  question: "A conceptual framework explains:",
  options: [
    "Relationship among concepts",
    "Printer configuration",
    "Research budget",
    "Coding language",
  ],
  answer: "Relationship among concepts",
},
{
  question: "Research data can be collected through:",
  options: [
    "Observation",
    "Interview",
    "Questionnaire",
    "All of these",
  ],
  answer: "All of these",
},
{
  question: "Triangulation in research means:",
  options: [
    "Using multiple methods",
    "Drawing triangles",
    "Mathematical coding",
    "Single method only",
  ],
  answer: "Using multiple methods",
},
{
  question: "Sampling frame means:",
  options: [
    "List of population elements",
    "Picture frame",
    "Questionnaire format",
    "Research table",
  ],
  answer: "List of population elements",
},
{
  question: "Systematic sampling selects units:",
  options: [
    "At regular intervals",
    "Randomly without order",
    "Only by choice",
    "Without criteria",
  ],
  answer: "At regular intervals",
},
{
  question: "Snowball sampling is useful for:",
  options: [
    "Hidden populations",
    "Large factories",
    "Laboratory testing",
    "Machine repair",
  ],
  answer: "Hidden populations",
},
{
  question: "Ethnographic research studies:",
  options: [
    "Cultures and communities",
    "Chemical formulas",
    "Machines",
    "Financial reports",
  ],
  answer: "Cultures and communities",
},
{
  question: "Case studies provide:",
  options: [
    "In-depth analysis",
    "Only statistics",
    "Only averages",
    "Only graphs",
  ],
  answer: "In-depth analysis",
},
{
  question: "Research recommendations should be:",
  options: [
    "Practical",
    "Irrelevant",
    "Confusing",
    "Biased",
  ],
  answer: "Practical",
},
{
  question: "A researcher should maintain confidentiality of:",
  options: [
    "Participant information",
    "Office furniture",
    "Computer brand",
    "Website design",
  ],
  answer: "Participant information",
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
