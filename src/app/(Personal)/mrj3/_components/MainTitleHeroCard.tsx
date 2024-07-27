export default function MainTitleHeroCard({
  bgUrl = "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  title = "Hello World",
  fontSize = "300px",
}: {
  fontSize?: string;
  bgUrl?: string;
  title?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        boxShadow: "5px 5px 25px 10px #0004",
        backgroundPosition: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        alignItems: "center",
        borderRadius: "20px",
        overflow: "hidden",
        fontSize: fontSize,
        display: "flex",
        height: "70vh",
        width: "100%",
      }}
    >
      <div
        className="hover:bg-[#0004] duration-200"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <span
          style={{
            borderBottom: "2px solid var(--bg)",
            fontFamily: "Times New Roman",
            userSelect: "none",
            lineHeight: "120%",
            padding: "0 100px",
            color: "var(--bg)",
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
