import Link from "next/link";

export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>{`
      a {
        color: red;
      }
    `}</style>
  </div>
);
