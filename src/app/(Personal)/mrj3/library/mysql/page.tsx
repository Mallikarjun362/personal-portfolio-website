import CurrentPageGlobalColorTheme from "@/app/_components/CurrentPageGlobalColorTheme";
import MainTitleHeroCard from "../../_components/MainTitleHeroCard";


export default function TechnologyMySQL() {
  const bgSize = 1000;
  const bgTexturePatterns = [
    "https://img.freepik.com/premium-vector/plaid-pattern-vector-check-fabric-texture-seamless-textile-design-clothes-paper-print-web-background_87543-8172.jpg",
    "https://img.freepik.com/premium-vector/seamless-vector-golden-texture-floral-pattern-luxury-repeating-damask-black-background-premium-wrapping-paper-silk-gold-cloth_167184-518.jpg",
    "https://cdn.vectorstock.com/i/500p/89/40/royal-baroque-seamless-black-pattern-vector-13928940.jpg",
    "https://www.shutterstock.com/image-vector/illustration-seamless-abstract-black-floral-600nw-256017685.jpg",
    "https://t3.ftcdn.net/jpg/07/99/04/32/360_F_799043223_IoT020qA8zW0vmN1vejyelH2Tl6ulLVs.jpg",
    "https://img.freepik.com/premium-vector/seamless-pattern-scottish-tartan-plaid-repeatable-background-with-check-fabric-texture-vector-backdrop-striped-textile-print_87543-7465.jpg",
    "https://static.vecteezy.com/system/resources/previews/010/834/103/non_2x/seamless-pattern-of-scottish-tartan-plaid-repeatable-background-with-check-fabric-texture-backdrop-striped-textile-print-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/014/437/032/non_2x/seamless-pattern-of-scottish-tartan-plaid-repeatable-background-with-check-fabric-texture-backdrop-striped-textile-print-vector.jpg",
    "https://img.freepik.com/premium-photo/blue-paper-pattern-with-wavy-lines_899870-8252.jpg",
    "https://lh3.googleusercontent.com/proxy/x5VXQMYxyUUm7tn-_lB3vedh_KbucZz6d91zVCMKC7bpC7MDX6yhx9Kn6L5kZRNGLSXmmGvTLOYL6TOHBLHi1HiukPFnkx63tvL71H706fajluhC",
  ];
  return (
    <main
      style={{
        backgroundImage: `url(${bgTexturePatterns[0]})`,
        backgroundSize: `1000px`,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%",
        padding: "70px",
        display: "flex",
        width: "100%",
        gap: "100px",
        paddingBottom: "100vh",
      }}
    >
      <CurrentPageGlobalColorTheme
        fg="#24392E"
        mg="#b37a45"
        bg="#eae0d8"
        focusShade="#d2bdac"
      />
      <MainTitleHeroCard title="MySQL" />
    </main>
  );
}
