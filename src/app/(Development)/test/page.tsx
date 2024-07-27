import MyLoadingComponent from "@/app/_components/MyLoadingComponent";

export default function TestExperimentPage() {
  return (
    <div style={{ height: "100%", border: "10px solid red" }}>
      <MyLoadingComponent isLoading={true} style={{height:"100%"}}>
        A
      </MyLoadingComponent>
    </div>
  );
}
