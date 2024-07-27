import BagOfKeywordTokensDisplay from "../../_components/BagOfKeywordTokensDisplay";
import ClassicMasterTitle from "../../_components/ClassicMasterTitle";
import styles from "../../styles.module.css";

const NaturalLanguageProcessingPage = () => {
  const importantTokens: Array<string> = [
    "Model Prediction Pipeline",
    "Data Preprocessing",
    "Data Cleaning",
  ];
  return (
    <main className={`${styles.classic}`}>
      <ClassicMasterTitle>Natural Language Processing</ClassicMasterTitle>
      {/* PRIMARY EDUCATIONAL RESOURCES */}
      <BagOfKeywordTokensDisplay tokensArray={importantTokens} />
      <section>
        <h1>
          Primary Standard Bulk Educational Resources <br />
          <b>(Books, University Courses, Popular Websites)</b>
        </h1>
      </section>
      {/* SECONDARY EDUCATIONAL RESOURCES */}
      <section>
        <h1>
          Secondary Educational Resources <br />
          <b>(Youtube Channels, Blogs)</b>
        </h1>
      </section>
    </main>
  );
};
export default NaturalLanguageProcessingPage;
