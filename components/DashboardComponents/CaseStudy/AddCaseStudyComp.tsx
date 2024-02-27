"use client";

import Heading5 from "@/components/Headings/Heading5";
import TextInput from "@/components/Input/TextInput";
import api from "@/lib/api";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import swal from "sweetalert";

interface CaseStudyData {
  labels?: string[];
  heading: string;
  subHeading: string;
  productImage?: string;
  article1?: string;
  article2?: string;
  testimonial?: string;
  avatar?: string;
  reviewer?: string;
  description: string;
}

const generateCaseStudyId = (title: string) => {
  if (title.length < 1) {
    throw new Error("Cannot generate caseStudyId because title is empty");
  }
  let number = Math.floor(Math.random() * 100);
  return title.substring(0, 3).concat("-").concat(number.toString());
};

function AddCaseStudyComp() {
  const router = useRouter();
  const defaultCaseStudyData: CaseStudyData = {
    labels: [],
    heading: "",
    subHeading: "",
    productImage: "",
    article1: "",
    article2: "",
    testimonial: "",
    avatar: "",
    reviewer: "",
    description: "",
  };

  const [formData, setFormData] = useState(defaultCaseStudyData);
  const [multipartFiles, setMultipartFiles] = useState<{[key: string]: File}>({});
  const [productPreviewImage, setProductPreviewImage] = useState<
    string | undefined | null
  >(null);
  const [reviewerPreviewImage, setReviewerPreviewImage] = useState<
    string | undefined | null
  >(null);
  const [label, setLabel] = useState("");
  const [labelArr, setLabelArr] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name}, New value: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(labelArr);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      //   console.log(label);
      if (label.length < 1) return;
      // setLabelArr((prevState) => [...prevState, label]);
      let updatedLabels = formData.labels;
      updatedLabels?.push(label);
      setFormData((prevState) => ({ ...prevState, labels:updatedLabels}));
      setLabel("");
    }
  };

  const handleLabelDelete = (e: React.MouseEvent<HTMLElement>) => {
    const spanElement = e.target as HTMLElement;
    const labelText = spanElement.previousElementSibling?.innerHTML;
    // setLabelArr((prevState) =>
    //   prevState.filter((label) => label !== labelText)
    // );

    let updatedLabels = formData.labels?.filter(label => label !== labelText);
    setFormData(prevState => ({...prevState,updatedLabels}));
  };

  const handleSelectedProductImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    console.log(e.target.files);

    try {
      if (!e.target.files) throw new Error("No file is selected");
      const file = e.target.files[0];
      const productFileReader = new FileReader();

      productFileReader.addEventListener("load", () => {
        const resFile = productFileReader.result?.toString();
        setProductPreviewImage(resFile);

        if (!resFile || resFile.length < 1)
          throw new Error("Product Image is empty");
          setMultipartFiles((prevData) => ({...prevData, productImage: file}));
      });

      productFileReader.readAsDataURL(file);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        swal(error.message, "error");
      }
    }
  };

  console.log(reviewerPreviewImage);
  const handleSelectedReviewerImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    console.log(e);

    try {
      if (!e.target.files) throw new Error("No file is selected");
      const file = e.target.files[0];
      const avatarFileReader = new FileReader();

      avatarFileReader.addEventListener("load", () => {
        const resFile = avatarFileReader.result?.toString();
        setReviewerPreviewImage(resFile);

        if (!resFile || resFile.length < 1)
          throw new Error("Reviewer Image is empty");
          setMultipartFiles((prevData) => ({...prevData, avatar: file}));
      });

      avatarFileReader.readAsDataURL(file);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        swal(error.message, "error");
      }
    }
  };

  const saveCaseStudy = async (caseStudy: Object) => {
    const token = localStorage.getItem("token");
    if (!token || token.length < 0) {
      router.push("/admin/signin");
    }

    const formData = new FormData();
    formData.append("caseStudy",JSON.stringify(caseStudy));
    formData.append("productImage", multipartFiles.productImage);
    formData.append("avatar", multipartFiles.avatar)

    console.log(caseStudy)
    console.log(multipartFiles)
    
    try {
      const data = await api.post("admin/case-studies", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
      });
      console.log(data);
      swal("Saved successfully", "success").then(() =>
        router.push("/admin/case-studies")
      );
    } catch (error) {
      console.log(error);
      if(error instanceof Error)
      swal("Error",error.message, "error")
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // setFormData((prevState) => ({ ...prevState, labels: labelArr }));

    try {
      const generatedCaseStudyId = generateCaseStudyId(formData.heading);
      const caseStudy = {
        ...formData,
        caseStudyId: generatedCaseStudyId,
      };
      // console.log(formData);
      // console.log(caseStudy);
      saveCaseStudy(caseStudy);
    } catch (error) {
      if(error instanceof AxiosError){
        if(error.response?.status === 403){
          swal("Error", error.message, "error");
        }
      }
      else if (error instanceof Error) {
        swal("Error!", error.message, "error");
      }
      
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Heading5 className="text-primary uppercase">
        Add Case Study Form
      </Heading5>
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
              Title
            </label>
            <TextInput
              size="medium"
              type="text"
              //   placeholder="Title"
              className="mb-4 md:mb-8"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="text-base text-primary font-semibold mb-2">
              Sub Heading
            </label>
            <TextInput
              size="medium"
              type="text"
              //   placeholder="Sub Heading"
              className="mb-4 md:mb-8"
              name="subHeading"
              value={formData.subHeading}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2 mb-4">
            <label className="text-base text-primary font-semibold mb-2">
              Labels
            </label>
            <input
              type="text"
              placeholder="Type a label and press enter..."
              className="mb-4 px-2 py-2 md:px-3 md:py-2 w-full text-sm md:text-base outline-secondary bg-lighter text-primary font-medium"
              name="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              <ul className="flex flex-row gap-4 flex-wrap max-w-full">
                {formData.labels?.map((label, index) => (
                  <li
                    className="bg-light py-1 px-4 flex flex-row items-center rounded-xl"
                    key={index}
                  >
                    <span>{label}</span>
                    <span
                      className="ml-2 cursor-pointer"
                      onClick={handleLabelDelete}
                    >
                      <RxCross2 size={16} className="pointer-events-none" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <label className="text-base text-primary font-semibold">
              Product Image
            </label>
            {productPreviewImage && (
              <Image
                src={productPreviewImage}
                alt="product-preview"
                width={300}
                height={200}
                className="max-h-[200px] object-cover shadow-md"
              />
            )}

            <input
              type="file"
              placeholder="Product Image"
              className="mb-4 md:mb-8"
              name="productImage"
              onChange={handleSelectedProductImage}
            />
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <label className="text-base text-primary font-semibold">
              Reviewer Avatar Image
            </label>
            {reviewerPreviewImage && (
              <Image
                src={reviewerPreviewImage}
                alt="reviewer-preview"
                width={300}
                height={200}
                className="max-h-[200px] object-cover shadow-md"
              />
            )}

            <input
              type="file"
              placeholder="Reviewer Avatar Image"
              className="mb-4 md:mb-8"
              name="reviewer"
              onChange={handleSelectedReviewerImage}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="text-base text-primary font-semibold mb-2">
              Testimonial
            </label>
            <TextInput
              size="medium"
              type="text"
              //   placeholder="Testimonial"
              className="mb-4 md:mb-8"
              name="testimonial"
              value={formData.testimonial || ""}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="text-base text-primary font-semibold mb-2">
              Reviewer
            </label>
            <TextInput
              size="medium"
              type="text"
              //   placeholder="Reviewer"
              className="mb-4 md:mb-8"
              name="reviewer"
              value={formData.reviewer || ""}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label className="text-base text-primary font-semibold mb-4">
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              className="w-full mb-4 px-2 py-2 md:px-3 md:py-2 text-sm md:text-base outline-secondary bg-lighter text-primary font-medium"
              value={formData.description || ""}
              onChange={handleChange}
            ></textarea>
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

export default AddCaseStudyComp;
