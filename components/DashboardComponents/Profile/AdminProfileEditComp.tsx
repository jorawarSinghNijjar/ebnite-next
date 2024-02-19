"use client";

import Heading5 from "@/components/Headings/Heading5";
import TextInput from "@/components/Input/TextInput";
import api from "@/lib/api";
import { AxiosError } from "axios";
import { Target } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import swal from "sweetalert";

function AdminProfileEditComp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [profileImageFile, setProfileImageFile] = useState<
    string | undefined | null
  >(null);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("profiles/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      const { name, profileImage, user } = res.data;
      setName(name);
      setProfileImageFile(profileImage);
      setUser(user)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSelectedProfileImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    console.log(e.target.files);

    try {
      if (!e.target.files) throw new Error("No file is selected");
      const file = e.target.files[0];
      const fileReader = new FileReader();

      fileReader.addEventListener("load", () => {
        const resFile = fileReader.result?.toString();
        setProfileImageFile(resFile);

        if (!resFile || resFile.length < 1)
          throw new Error("Profile Image is empty");
      });

      fileReader.readAsDataURL(file);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        swal(error.message, "error");
      }
    }
  };

  const saveUserProfile = async (formData: UserProfile) => {
    const token = localStorage.getItem("token");
    const res = await api.post("/profiles/me", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if(res.status === 201){
        swal("Success", "Profile saved successfully", "success").then(() =>
        router.push("/admin/profile")
      );
    }
    
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const formData: UserProfile = {
      name: name,
      user:user,
      profileImage: profileImageFile,
    };
    try {
      console.log(formData);
      saveUserProfile(formData);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) {
          swal("Error", error.message, "error");
        }
      } else if (error instanceof Error) {
        swal("Error!", error.message, "error");
      }
    }
  };

  return (
    <div>
      <Heading5 className="text-primary uppercase">Edit Profile Form</Heading5>
      <div className="shadow-md bg-white py-10 px-8 rounded-lg">
        <form
          onSubmit={handleFormSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // Keeps form from submiting on hitting enter
              e.preventDefault();
            }
          }}
        >
          <fieldset className="flex flex-col">
            <label className="text-base text-primary font-semibold mb-2">
              Name
            </label>
            <TextInput
              size="medium"
              type="text"
              className="mb-4 md:mb-8"
              name="heading"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <label className="text-base text-primary font-semibold">
              Profile Image
            </label>
            {profileImageFile && (
              <Image
                src={profileImageFile}
                alt="profile image"
                width={200}
                height={200}
                className="max-h-[200px] object-cover shadow-md"
              />
            )}

            <input
              type="file"
              placeholder="Product Image"
              className="mb-4 md:mb-8"
              name="productImage"
              onChange={handleSelectedProfileImage}
            />
          </fieldset>

          <input
            type="submit"
            value="Save"
            className="bg-secondary text-slate-100 uppercase px-7 py-2 xl:px-8 xl:py-2 2xl:px-9 2xl:py-3 rounded-3xl xl:rounded-full hover:scale-x-105 transition hover:cursor-pointer text-base 2xl:text-lg font-medium"
          />
        </form>
      </div>
    </div>
  );
}

export default AdminProfileEditComp;
