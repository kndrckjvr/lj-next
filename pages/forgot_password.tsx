import { Button, FormInput } from "@/components";
import { FormCardInnerLayout, FormCardLayout } from "@/layouts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  return (
    <FormCardLayout>
      <FormCardInnerLayout>
        <div className="w-full">
          <h3
            className={
              "text-center text-pickled-bluewood-800 font-bold text-xl mb-4"
            }
          >
            Forgot Password
          </h3>
          <FormInput
            labelText={"User ID / Email"}
            labelClass={"mb-5"}
            name={"username"}
            value={username}
            placeholder={"email@domain.com"}
            onChange={handleUsernameChange}
          />
          <div className="flex w-full justify-between mb-16">
            <Link href="/">
              <Button type="button">Back</Button>
            </Link>
            <Button type="button">Submit</Button>
          </div>
          <div className="flex w-full justify-end">
            <Image
              src="/LingjackDigitalLogo.png"
              alt="Lingjack Digital Logo"
              className={classNames("mb-2 w-40")}
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </FormCardInnerLayout>
    </FormCardLayout>
  );
};

export default Home;
