import BagOfKeywordTokensDisplay from "../../_components/BagOfKeywordTokensDisplay";
import { importantKeywordsTerminology, mainContentPoints } from "./content";
import { H1, H2 } from "./_components/CustomeElements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Large Language Models",
  description: "Training Large Language Models",
};

export default function LargeLanguageModelsPage() {
  return (
    <main
      className="lg:p-[100px] p-[30px]"
      style={{
        fontFamily: "Times New Roman",
        flexDirection: "column",
        paddingBottom: "50vh",
        userSelect: "none",
        fontSize: "30px",
        display: "flex",
        gap: "50px",
      }}
    >
      <H1>Training Large Language Models</H1>
      <BagOfKeywordTokensDisplay tokensArray={importantKeywordsTerminology} />
      <p
        style={{
          backgroundColor: "var(--bg)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {mainContentPoints}
      </p>
      <H2>Standard Bulk Educationl Resources</H2>
      <H2>Tools, Technologies, Libraries & Frameworks</H2>
    </main>
  );
}
