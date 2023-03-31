import { Card, PageTitle } from "@/components";
import { DashboardLayout, DashboardInnerLayout } from "@/layouts";

const NodeProvisioning = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Node Provisioning" subTitle="Super Admin" />
      <DashboardInnerLayout>
        <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
          <h1>Hello, I am Node Provisioning.</h1>
        </Card>
        <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
          <h1>Hello, I am Node Provisioning.</h1>
        </Card>
        <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
          <h1>Hello, I am Node Provisioning.</h1>
        </Card>
      </DashboardInnerLayout>
    </DashboardLayout>
  );
};

export default NodeProvisioning;
