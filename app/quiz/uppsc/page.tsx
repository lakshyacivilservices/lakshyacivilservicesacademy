const subjects = [
  {
    title: "History of India & Indian National Movement",
    link: "/quiz/uppsc/history",
    color: "#f97316",
  },
  {
    title: "Indian & World Geography",
    link: "/quiz/uppsc/geography",
    color: "#2563eb",
  },
  {
    title: "Indian Polity & Governance",
    link: "/quiz/uppsc/polity",
    color: "#16a34a",
  },
  {
    title: "Economy & Social Development",
    link: "/quiz/uppsc/economy",
    color: "#7c3aed",
  },
  {
    title: "Environment & Ecology",
    link: "/quiz/uppsc/environment",
    color: "#15803d",
  },
  {
    title: "General Science",
    link: "/quiz/uppsc/science",
    color: "#0891b2",
  },
  {
    title: "Current Affairs",
    link: "/quiz/uppsc/current-affairs",
    color: "#dc2626",
  },
  {
    title: "UP Special",
    link: "/quiz/uppsc/up-special",
    color: "#c2410c",
  },
  {
    title: "Comprehension",
    link: "/quiz/uppsc/comprehension",
    color: "#0f766e",
  },
  {
    title: "Logical Reasoning",
    link: "/quiz/uppsc/reasoning",
    color: "#581c87",
  },
  {
    title: "Mental Ability",
    link: "/quiz/uppsc/mental-ability",
    color: "#1d4ed8",
  },
  {
    title: "Decision Making",
    link: "/quiz/uppsc/decision-making",
    color: "#be123c",
  },
  {
    title: "Basic Numeracy",
    link: "/quiz/uppsc/basic-numeracy",
    color: "#854d0e",
  },
  {
    title: "Data Interpretation",
    link: "/quiz/uppsc/data-interpretation",
    color: "#0f172a",
  },
];

export default function Page() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        UPPSC Prelims Subjects 🚀
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        Paper 1 – General Studies (GS) & Paper 2 – CSAT
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {subjects.map((subject, index) => (
          <a
            key={index}
            href={subject.link}
            style={{
              background: subject.color,
              color: "white",
              padding: "30px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            {subject.title}
          </a>
        ))}
      </div>
    </main>
  );
}
