import { Card, PageTitle } from "@/components";
import { DashboardLayout } from "@/layouts";

const CommandConsole = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Command Console" subTitle="Super Admin" />
      <Card className="w-full">
        <h1>Hello, I am Command Console.</h1>
      </Card>
    </DashboardLayout>
  );
};

export default CommandConsole;
