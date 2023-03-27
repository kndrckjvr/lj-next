import { Card } from "@/components";
import DashboardLayout from "@/layouts/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
        <h1>Hello, I am Settings.</h1>
      </Card>
    </DashboardLayout>
  );
};

export default Settings;
