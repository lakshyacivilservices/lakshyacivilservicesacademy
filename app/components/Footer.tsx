export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "50px 20px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2>Lakshya Quiz Academy 🚀</h2>

          <p>
            Practice quizzes, MCQs, mock tests, UPSC, SSC,
            Banking, Railway, UGC NET, NEET, JEE and more.
          </p>
        </div>

        <div>
          <h3>Social Media</h3>

          <p>
            <a href="https://www.youtube.com/@LakshyCivilServices" target="_blank" style={{ color: "white" }}>
              YouTube
            </a>
          </p>

          <p>
            <a href="https://www.instagram.com/lakshyacivilservicesacademy/" target="_blank" style={{ color: "white" }}>
              Instagram
            </a>
          </p>

          <p>
            <a href="https://lakshyacivilservicesacademy.blogspot.com/" target="_blank" style={{ color: "white" }}>
              Blogspot
            </a>
          </p>

          <p>
            <a href="https://t.me/lakshyacivilservicesacamedy" target="_blank" style={{ color: "white" }}>
              Telegram
            </a>
          </p>

          <p>
            <a href="https://whatsapp.com/channel/0029Vb7vDqq4IBhGjuC9j21p" target="_blank" style={{ color: "white" }}>
              WhatsApp Channel
            </a>
          </p>
        </div>

        <div>
          <h3>Study Material</h3>

          <p>
            <a href="https://amzn.to/48R6PNQ" target="_blank" style={{ color: "white" }}>
              Research Methodology Book
            </a>
          </p>

          <p>
            <a href="https://palratiraj.gumroad.com/l/qhfrbw" target="_blank" style={{ color: "white" }}>
              Premium Notes
            </a>
          </p>

          <div style={{ marginTop: "20px" }}>
            <a
              href="https://t.me/lakshyacivilservicesacamedy"
              target="_blank"
              style={{
                display: "inline-block",
                background: "#2563eb",
                color: "white",
                padding: "12px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              Join Telegram For PDF Support
            </a>
          </div>

          <div>
            <a
              href="https://whatsapp.com/channel/0029Vb7vDqq4IBhGjuC9j21p"
              target="_blank"
              style={{
                display: "inline-block",
                background: "#16a34a",
                color: "white",
                padding: "12px 18px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              WhatsApp PDF Support
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #374151",
          paddingTop: "20px",
          fontSize: "14px",
        }}
      >
        © 2026 Lakshya Quiz Academy. All rights reserved.
      </div>
    </footer>
  );
}