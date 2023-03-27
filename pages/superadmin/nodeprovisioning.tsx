import { Card } from "@/components";
import DashboardLayout from "@/layouts/DashboardLayout";

const NodeProvisioning = () => {
  return (
    <DashboardLayout>
      <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
        <h1>Hello, I am Node Provisioning.</h1>
      </Card>
      <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
        <h1>Hello, I am Node Provisioning.</h1>
      </Card>
      <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
        <h1>Hello, I am Node Provisioning.</h1>
      </Card>
    </DashboardLayout>
  );
};

export default NodeProvisioning;
