import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Lakshya Quiz Academy",
  description:
    "Practice quizzes, MCQs, mock tests, current affairs and exam preparation.",
  verification: {
    google: "ALXbPx-mOkZZQmvEtp4llpp1oa9JRNApDTGjWbKO5Y0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}