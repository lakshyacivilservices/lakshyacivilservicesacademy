export default function ResearchMethodologyIndex() {
  const units = [
    {
      title: "Unit 1 - Meaning, Types and Characteristics of Research",
      link: "/quiz/research-methodology/unit-1",
    },
    {
      title: "Unit 2 - Research Methods",
      link: "/quiz/research-methodology/unit-2",
    },
    {
      title: "Unit 3 - Steps of Research",
      link: "/quiz/research-methodology/unit-3",
    },
    {
      title: "Unit 4 - Thesis and Article Writing",
      link: "/quiz/research-methodology/unit-4",
    },
    {
      title: "Unit 5 - ICT and Research Ethics",
      link: "/quiz/research-methodology/unit-5",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "10px",
        }}
      >
        UGC NET Research Methodology Quiz
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Unit-wise MCQ quizzes for UGC NET Research Aptitude and Research Methodology preparation.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {units.map((unit) => (
          <a
            key={unit.title}
            href={unit.link}
            style={{
              textDecoration: "none",
              background: "#2563eb",
              color: "white",
              padding: "25px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {unit.title}
          </a>
        ))}
      </div>
    </main>
  );
}
