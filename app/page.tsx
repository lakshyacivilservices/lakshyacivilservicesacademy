import Link from "next/link";

const categories = [
  { name: "SSC GK", slug: "ssc-gk" },
  { name: "UPSC", slug: "upsc" },
  { name: "Banking", slug: "banking" },
  { name: "Railway", slug: "railway" },
  { name: "Police", slug: "police" },
  { name: "English", slug: "english" },
  { name: "Reasoning", slug: "reasoning" },
  { name: "Current Affairs", slug: "current-affairs" },
  { name: "History", slug: "history" },
  { name: "Geography", slug: "geography" },
  { name: "Science", slug: "science" },
  { name: "Agriculture", slug: "agriculture" },
];

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Lakshya Quiz Academy 🚀
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/quiz/${cat.slug}`}
            style={{
              background: "#111",
              padding: "25px",
              borderRadius: "14px",
              textDecoration: "none",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid #333",
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </main>
  );
}


