import FilledButton from "@/components/Buttons/FilledButton";
import Heading2 from "@/components/Headings/Heading2";
import SelectInput from "@/components/Input/SelectInput";
import TextArea from "@/components/Input/TextArea";
import TextInput from "@/components/Input/TextInput";
import SubHeading1 from "@/components/SubHeading/SubHeading1";
import Card from "@/components/card/Card";
import { useState } from "react";

function SignUpPage() {
  const handleFormSubmit = () => {};

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <section className="w-full lg:w-1/2 my-10 px-6 pt-10 lg:pt-32 lg:px-10 mx-auto">
      <div className="shadow-xl py-10 px-10">
        <div className="mx-auto text-center lg:mb-32">
          <Heading2>Sign Up</Heading2>
        </div>
        <div className="mx-auto text-center">
          <form onSubmit={handleFormSubmit} className="w-full">
            <TextInput
              type="text"
              placeholder="Username or Email"
              className="mb-8"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="Password"
              className="mb-8"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <TextInput
              type="password"
              placeholder="Confirm Password"
              className="mb-8"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FilledButton
              size="medium"
              className="bg-secondary text-slate-100 uppercase"
            >
              Sign Up
            </FilledButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
