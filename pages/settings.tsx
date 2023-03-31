import { Card, PageTitle } from "@/components";
import { DashboardInnerLayout, DashboardLayout } from "@/layouts";

const Settings = () => {
  return (
    <DashboardLayout>
      <PageTitle pageTitle="Settings" subTitle="Settings" />
      <DashboardInnerLayout>
        <Card className="w-1/3 max-md:w-1/2 max-sm:w-full">
          <h1>Hello, I am Settings.</h1>
        </Card>
      </DashboardInnerLayout>
    </DashboardLayout>
  );
};

export default Settings;
