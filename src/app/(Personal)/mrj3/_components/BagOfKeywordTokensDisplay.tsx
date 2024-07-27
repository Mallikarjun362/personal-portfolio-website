const BagOfKeywordTokensDisplay = ({
  tokensArray,
}: {
  tokensArray: Array<string>;
}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        userSelect: "none",
        flexWrap: "wrap",
        fontSize: "30px",
        display: "flex",
        padding: "20px",
        width: "100%",
        gap: "20px",
      }}
    >
      {tokensArray.map((val, idx) => (
        <div
          className="bg-[--bg] hover:bg-[--bgx] border-[--bgx] hover:border-[--mg]"
          key={idx}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            borderRadius: "50px",
            textAlign: "center",
            borderWidth: "2px",
            padding: "0 20px",
            overflow: "clip",
            maxWidth: "100%",
            flex: 1,
          }}
        >
          {val}
        </div>
      ))}
    </div>
  );
};
export default BagOfKeywordTokensDisplay;
