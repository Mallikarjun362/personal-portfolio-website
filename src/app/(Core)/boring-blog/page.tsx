export default function BoringBlog_BrowsingPage() {
  return (
    <main style={{ padding: "100px" }}>
      <h1
        className="hover:bg-[--focusShade] bg-[--bg] transition-[background-color] duration-500"
        style={{
          fontFamily: "Times New Roman",
          width: "fit-content",
          padding: "15px 20px",
          borderRadius: "20px",
          lineHeight: "100%",
          userSelect: "none",
          fontSize: "60px",
        }}
      >
        Boring Plain text Blog
      </h1>
      <div></div>
    </main>
  );
}
