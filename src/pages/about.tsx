import Link from "next/link";

const AboutPage = () => (
  <div>
    <h1 className="heading">About Me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    <Link href="/contact">Want to work with me? Reach out.</Link>
  </div>
);

export default AboutPage;
