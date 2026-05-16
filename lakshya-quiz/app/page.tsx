"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#141E30,#243B55,#4A00E0)",
        padding: "40px",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px"
        }}
      >
        🚀 Lakshya Quiz Academy
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "50px"
        }}
      >
        {[
          "UPSC",
          "SSC",
          "UGC NET",
          "NCERT",
          "PSU",
          "NEET",
          "JEE",
          "USA Citizenship 🇺🇸"
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background:
                "linear-gradient(135deg,#ff512f,#dd2476)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}