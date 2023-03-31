import { Card, PageTitle } from "@/components";
import { DashboardInnerLayout, DashboardLayout } from "@/layouts";

const SmartPumpSystem = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Smart Pump System" />
      <DashboardInnerLayout>
        {new Array(100).fill("").map((e, i) => (
          <Card className="w-1/3 max-md:w-1/2 max-sm:w-full" key={i}>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
            <h1>Smart Pump System, {i + 1}</h1>
          </Card>
        ))}
      </DashboardInnerLayout>
    </DashboardLayout>
  );
};

export default SmartPumpSystem;
