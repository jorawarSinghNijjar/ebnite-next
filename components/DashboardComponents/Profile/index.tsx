"use client";

import LinkButtonIcon from "@/components/Buttons/LinkButtonIcon";
import api from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const AdminProfile = () => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | undefined | null>(
    null
  );

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("profiles/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      const { name, profileImage } = res.data;
      setName(name);
      setProfileImage(profileImage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <span>Name : </span>
        {name}
      </div>
      {!profileImage ? null : profileImage.length < 1 ? (
        <h3>No Profile image</h3>
      ) : (
        <Image
          src={profileImage}
          alt="Admin Photo"
          width={200}
          height={200}
          className="object-contain min-w-[200px]"
        />
      )}

      <LinkButtonIcon
        text="Edit"
        className="bg-primary text-light"
        href={`/admin/profile/edit`}
        icon={<FaRegEdit />}
      ></LinkButtonIcon>
    </div>
  );
};

export default AdminProfile;
