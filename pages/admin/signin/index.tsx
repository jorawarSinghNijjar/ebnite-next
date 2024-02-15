import FilledButton from "@/components/Buttons/FilledButton";
import Heading2 from "@/components/Headings/Heading2";
import TextInput from "@/components/Input/TextInput";
import { useState } from "react";

function SignInPage() {
  const handleFormSubmit = () => {};

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-screen h-screen px-6 pt-4 lg:pt-16 lg:px-10 bg-lighter">
      <div className="lg:w-1/2 mx-auto bg-white rounded-xl shadow-xl py-10 px-10">
        <div className="mx-auto text-center xl:mb-16">
          <Heading2>Sign In</Heading2>
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
              placeholder="password"
              className="mb-8"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FilledButton
              size="medium"
              className="bg-secondary text-slate-100 uppercase"
            >
              Sign in
            </FilledButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
