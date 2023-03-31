import { Card, PageTitle } from "@/components";
import { DashboardLayout } from "@/layouts";

const FirmwareUpdate = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Command Console" subTitle="Super Admin" />
      <Card className="w-full">
        <h1>Hello, I am Firmware Update.</h1>
      </Card>
    </DashboardLayout>
  );
};

export default FirmwareUpdate;
