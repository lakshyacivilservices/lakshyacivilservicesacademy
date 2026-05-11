import Navbar from "./components/Navbar";
import { quizCategories } from "@/data/quiz-categories";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed,#ec4899)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            marginBottom: "20px",
          }}
        >
          Lakshya Civil Services Academy 🚀
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Practice quizzes, MCQs, mock tests,
          reasoning, maths, UPSC, SSC, Banking,
          Railway, UGC NET, NEET, JEE and more.
        </p>
      </section>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          padding: "50px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            marginBottom: "35px",
          }}
        >
          All Quiz Categories 🚀
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {quizCategories.map((quiz,index)=>(
            <div
              key={index}
              style={{
                background: quiz.color,
                padding: "30px",
                borderRadius: "24px",
                color: "white",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  marginTop: 0,
                }}
              >
                {quiz.title}
              </h2>

              <a
                href={quiz.link}
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  background: "white",
                  color: "#111827",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Start Quiz →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
