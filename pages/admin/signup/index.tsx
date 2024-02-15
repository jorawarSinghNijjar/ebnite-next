import FilledButton from "@/components/Buttons/FilledButton";
import Heading2 from "@/components/Headings/Heading2";
import TextInput from "@/components/Input/TextInput";
import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/router";

interface SignupRequest{
  name:string;
  email:string;
  password:string;
}

function SignUpPage() {

  const router = useRouter();

  const signup = async (signupRequest: SignupRequest) => {
    try{
      const res = await api.post("auth/signup", signupRequest);
      console.log(res);
      if(res.data){
        router.push("/admin/signin");
      }
    }
    catch(error){
      console.log(error);
      alert("Sign up failed ");
    }
      
  }

  const handleFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const signupRequest:SignupRequest = {
      name: name,
      email: username,
      password: password
    }
    console.log(signupRequest)

    signup(signupRequest);
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <section className="w-screen h-screen px-6 pt-4 lg:pt-16 lg:px-10 bg-lighter">
      <div className="lg:w-1/2 mx-auto bg-white rounded-xl shadow-xl py-10 px-10">
        <div className="mx-auto text-center xl:mb-16">
          <Heading2>Sign Up</Heading2>
        </div>
        <div className="mx-auto text-center">
          <form onSubmit={handleFormSubmit} className="w-full">
            <TextInput
              type="text"
              placeholder="Name"
              className="mb-8"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
