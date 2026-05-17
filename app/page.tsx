export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>Lakshya Civil Services Academy 🚀</h1>

      <p>
        Free MCQs for UPPSC, UGC NET,
        Psychology, SSC GK and more.
      </p>

      <a
        href="/quiz/uppsc"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "15px 25px",
          background: "#2563eb",
          color: "white",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Start UPPSC Quiz
      </a>
    </main>
  );
}
