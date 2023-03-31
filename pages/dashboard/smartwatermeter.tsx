import { Card, PageTitle } from "@/components";
import { DashboardInnerLayout, DashboardLayout } from "@/layouts";

const SmartWaterMeter = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Smart Water Meter" />
      <DashboardInnerLayout>
        {new Array(100).fill("").map((e, i) => (
          <Card className="w-1/3 max-md:w-1/2 max-sm:w-full" key={i}>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
            <h1>Smart Water Meter, {i + 1}</h1>
          </Card>
        ))}
      </DashboardInnerLayout>
    </DashboardLayout>
  );
};

export default SmartWaterMeter;
