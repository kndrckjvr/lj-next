import { Button, FormInput } from "@/components";
import FormCardLayout from "@/layouts/FormCardLayout";
import { getGoogleCaptchaKey } from "@/utils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  let recaptchaSiteKey = getGoogleCaptchaKey();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <FormCardLayout>
      <div
        className={
          "flex flex-col items-center justify-center md:border-r-2 border-r-pickled-bluewood-900 md:w-2/5 md:my-20 my-10 md:mr-2"
        }
      >
        <Image
          src="/lingjack_login.png"
          alt="Lingjack Digital Logo"
          className={classNames("mb-2 md:w-3/5 max-md:w-2/5")}
          width={400}
          height={400}
          priority
        />
        <h1 className={"text-pickled-bluewood-900 font-bold lg:text-2xl"}>
          We Make IOT Work for You!
        </h1>
      </div>
      <div className={"flex flex-col justify-center md:w-3/5 px-10"}>
        <div className="w-full">
          <h3
            className={
              "text-center text-pickled-bluewood-800 font-bold text-xl mb-4"
            }
          >
            Sign In
          </h3>
          <FormInput
            labelText={"User ID / Email"}
            labelClass={"mb-5"}
            name={"username"}
            value={username}
            onChange={handleUsernameChange}
            placeholder={"email@domain.com"}
          />
          <FormInput
            labelText={"Password"}
            labelClass={"mb-5"}
            name={"password"}
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="flex w-full justify-between mb-4">
            <Link href={"/forgot_password"}>Forgot Password?</Link>
          </div>
          <div className="flex w-full justify-end mb-16">
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
      </div>
    </FormCardLayout>
  );
};

export default Home;
