"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import DocumentUpload from "@/app/components/DocumentUpload";

function EmployeeData() {

  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const fullName = searchParams.get("fullName");

  const data = {
    Empid: `Emp - ${id}`,
    EmpName: fullName,
  };

  const identityDocuments = [
  {
    id: "aadhaar",
    title: "Aadhaar Card",
  },
  {
    id: "pan",
    title: "PAN Card",
  },
  {
    id: "drivingLicence",
    title: "Driving Licence",
  },
];
  const educationDocuments = [
  {
    id: "tenth",
    title: "10th",
  },
  {
    id: "twelth",
    title: "12th",
  },
  {
    id: "degree",
    title: "UG",
  },
  {
    id: "degree_pg",
    title: "PG",
  },
];

  return (
    <div className="p-1">

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-[250px_repeat(1,minmax(0,1fr))]
        gap-6
        p-4
        md:p-6
        lg:p-10
        items-start
      ">

   

        <div className="bg-white dark:bg-gray-800
          rounded-xl flex flex-col  items-center gap-2 p-6">

          <div className="bg-gray-300 rounded-full
            w-[120px] h-[120px] relative shrink-0">

            <Image
              src="/profile_pic_0.png"
              alt="profile picture"
              width={200}
              height={200}
              className="
                absolute
                -top-[18px]
                left-1/2
                -translate-x-1/2
                w-[200px]
                lg:w-[230px]
                h-[200px]
                max-w-none
                object-contain
              "
            />

          </div>

          <div className="flex flex-col pt-15 gap-3 w-full">

            <div className="flex flex-col items-center
              gap-1 mb-3">

              <h1 className="text-xl font-black
                text-center break-words">

                {data.EmpName}

              </h1>

              <p className="text-base text-gray-500
                text-center">

                {data.Empid}

              </p>

            </div>

            {/* <button className="w-full p-2 bg-secondary
              text-sm text-white rounded-md cursor-pointer">

              Edit Profile

            </button>

            <button className="w-full p-2 bg-secondary
              text-sm text-white rounded-md cursor-pointer">

              Download CV

            </button> */}

          </div>

        </div>

<div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 bg-white
          dark:bg-gray-800 rounded-xl p-4 shadow-sm">

          <h1 className="text-xl font-semibold">
            Employee CV
          </h1>

          <DocumentUpload
            title="Curriculum Vitae"
            allowedExtensions={["pdf", "doc", "docx"]}
          />

        </div>

 

        <div className="flex flex-col gap-4 bg-white
          dark:bg-gray-800 rounded-xl p-4 shadow-sm">

          <h1 className="text-xl font-semibold">
            Identity Documents
          </h1>
  {identityDocuments.map((document) => (

    <DocumentUpload
      key={document.id}
      title={document.title}
      allowedExtensions={["pdf", "jpg", "jpeg", "png"]}
    />

  ))}

        </div>

   

        <div className="flex flex-col gap-4 bg-white
          dark:bg-gray-800 rounded-xl p-4 shadow-sm">

          <h1 className="text-xl font-semibold">
            Education Documents
          </h1>

          {/* <DocumentUpload
            title="10th Certificate"
            allowedExtensions={["pdf", "jpg", "jpeg", "png"]}
          />

          <DocumentUpload
            title="12th Certificate"
            allowedExtensions={["pdf", "jpg", "jpeg", "png"]}
          />

          <DocumentUpload
            title="Graduation Certificate"
            allowedExtensions={["pdf", "jpg", "jpeg", "png"]}
          /> */}
           {educationDocuments.map((document) => (

    <DocumentUpload
      key={document.id}
      title={document.title}
      allowedExtensions={["pdf", "jpg", "jpeg", "png"]}
    />

  ))}

        </div>

      </div>
      </div>

    </div>
  );
}

export default function EmployeeDataPage() {

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <EmployeeData />

    </Suspense>
  );
}