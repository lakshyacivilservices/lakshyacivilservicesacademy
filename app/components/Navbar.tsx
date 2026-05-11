import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrap">
        <div className="logo">
          Lakshya Civil Services Academy 🚀
        </div>

        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </div>
      </div>
    </nav>
  );
}
