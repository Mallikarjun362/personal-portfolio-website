import Link from "next/link";
import { RouteNameResolution } from ".";
import { FaCircle } from "react-icons/fa";

export default function PersonalProjectIndexPage() {
  return (
    <main style={{ padding: "50px", fontSize: "30px", paddingBottom: "10vh" }}>
      <h1 style={{ fontSize: "40px" }}>Index</h1>
      <ul style={{ paddingLeft: "40px" }}>
        {Object.keys(RouteNameResolution).map((v, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
              gap: "10px",
            }}
          >
            <FaCircle size={13} />
            <Link
              href={RouteNameResolution[v].link}
              className="hover:underline"
              style={{ color: "blue" }}
            >
              {RouteNameResolution[v].title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
