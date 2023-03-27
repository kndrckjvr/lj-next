import { Card } from "@/components";
import DashboardLayout from "@/layouts/DashboardLayout";

const SmartFireExtinguisher = () => {
  return (
    <DashboardLayout>
      {new Array(100).fill("").map((e, i) => (
        <Card className="w-1/3 max-md:w-1/2 max-sm:w-full" key={i}>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
          <h1>Smart Fire Extinguisher, {i + 1}</h1>
        </Card>
      ))}
    </DashboardLayout>
  );
};

export default SmartFireExtinguisher;
