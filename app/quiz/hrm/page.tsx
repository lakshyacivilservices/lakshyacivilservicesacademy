export default function HRMQuizIndex() {
  const units = [
    {
      title: "Unit 1 - Principles and Practices of Management",
      link: "/quiz/hrm/unit-1",
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
        UGC NET HRM & PSU Exams Quiz
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Unit-wise MCQ quizzes for UGC NET HRM,
        Labour Welfare, PSU HR Officer,
        Labour Officer and Management exams.
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
