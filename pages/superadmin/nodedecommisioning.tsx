import { Card, PageTitle } from "@/components";
import { DashboardLayout } from "@/layouts";

const NodeDecommissioning = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Node Decommissioning" subTitle="Super Admin" />
      <Card className="w-full">
        <h1>Hello, I am Node Decommissioning.</h1>
      </Card>
    </DashboardLayout>
  );
};

export default NodeDecommissioning;
