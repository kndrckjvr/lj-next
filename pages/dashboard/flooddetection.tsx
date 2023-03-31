import { Card, PageTitle } from "@/components";
import { DashboardInnerLayout, DashboardLayout } from "@/layouts";

const FloodDetection = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Flood Detection" />
      <DashboardInnerLayout>
        {new Array(100).fill("").map((e, i) => (
          <Card className="w-1/2 max-md:w-full" key={i}>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
            <h1>Flood Detection, {i + 1}</h1>
          </Card>
        ))}
      </DashboardInnerLayout>
    </DashboardLayout>
  );
};

export default FloodDetection;
