"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DocumentCentersidemenu from "@/app/components/DocumentCentersidemenu";
import EmployeeProfileInformation from '../components/EmployeeProfileInformation';
import { Camera, Trash2, X } from 'lucide-react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions } from '@mui/material';


interface profile{
  id:string;
  name:string;
}

const profile:profile ={
  id:"Emp001",
  name:"Priya Sharma",

}
function useImagePreview(file: File | null) {
  const [preview, setPreview] =
    useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return preview;
}

function EmployeeProfile() {
  const [value, setValue] = useState(0);
  const [editable, setEditable] = useState(false);

const [profileImage, setProfileImage] =
  useState<File | null>(null);

const [draftImage, setDraftImage] =
  useState<File | null>(null);

const [photoDialog, setPhotoDialog] =
  useState(false);

const [imageError, setImageError] =
  useState("");

const fileInputRef =
  useRef<HTMLInputElement>(null);

  const profilePreview = useImagePreview(profileImage);

const draftPreview = useImagePreview(draftImage);


const handleOpenPhotoDialog = () => {
  setDraftImage(profileImage);
  setImageError("");
  setPhotoDialog(true);
};


const handleImageChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];


  e.target.value = "";

  if (!file) return;

  setImageError("");

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    setImageError("Only JPG, PNG and WEBP images are allowed");
    return;
  }

  if (file.size > MAX_FILE_SIZE) {
    setImageError("Image size must not exceed 5 MB");
    return;
  }

  setDraftImage(file);
};

const handleSavePhoto = () => {
  setProfileImage(draftImage);
  setPhotoDialog(false);
  setImageError("");
};

const handleCancelPhoto = () => {
  setDraftImage(profileImage);
  setPhotoDialog(false);
  setImageError("");
};

const handleRemovePhoto = () => {
  setDraftImage(null);
  setImageError("");
};

 const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <div className="w-full">
   
  <div className="
    grid
    grid-cols-1
    md:grid-cols-[250px_minmax(0,1fr)]
    gap-6
    p-4
    md:p-6
    lg:p-10
    items-start
  ">

    <div className="bg-white rounded-md dark:!bg-slate-700/50 dark:!text-white flex flex-col items-center gap-2 p-6 w-full">


  <div className="group relative bg-gray-300 rounded-full w-[120px] h-[120px] shrink-0">

    {profilePreview ? (
      <Image
        src={profilePreview}
        alt="Profile picture"
        fill
        sizes="120px"
        unoptimized
        className="rounded-full object-cover"
      />
    ) : (
      <Image
        src="/profile_pic_0.png"
        alt="Profile picture"
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
    )}



    <button
      type="button"
      aria-label="Change profile picture"
      title="Change profile picture"
      onClick={handleOpenPhotoDialog}
      className={`
        absolute
        ${profilePreview ? "bottom-0" : "-bottom-12"}
        right-0
        z-10
        w-9 h-9
        rounded-full
        bg-secondary
        text-white
        flex items-center justify-center
        border-2 border-white
        shadow-md
        cursor-pointer
        transition-opacity duration-300
        ${
          editable
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
        }
      `}
    >
      <Camera size={18} />
    </button>

  </div>



  <div
    className={`flex flex-col gap-3 w-full ${
      profilePreview ? "pt-4" : "pt-15"
    }`}
  >

    {profile && (
      <div className="flex flex-col items-center gap-1 mb-3 dark:!text-white ">

        <h1 className="text-xl font-black text-center break-words max-w-full">
          {profile.name}
        </h1>

        <p className="text-base text-gray-500 text-center break-all">
          {profile.id}
        </p>

      </div>
    )}

    <button
      type="button"
      className="w-full p-2 bg-secondary text-sm text-white rounded-md cursor-pointer"
      onClick={() => {
        setEditable(true);
        setValue(0);
      }}
    >
      Edit Profile
    </button>

    <button
      type="button"
      className="w-full p-2 bg-secondary text-sm text-white rounded-md cursor-pointer"
    >
      Download CV
    </button>

  </div>

</div>
   

    
    <div className="bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/0 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] rounded-md p-6 h-[600px] min-w-0">
            <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Document center tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          minHeight: 42,

          "& .MuiTabs-indicator": {
            display: "none",
          },

          "& .MuiTabs-flexContainer": {
            gap: "8px",
          },

          "& .MuiTab-root": {
            textTransform: "none",
            minHeight: 4,
            fontSize: "14px",
            fontWeight: 600,
            // borderRadius: "10px",
            color: "#64748b",
            padding: "5px 20px",
            
          },

          "& .MuiTab-root.Mui-selected": {
  // backgroundColor: "#d1fae5",
  color: "#166534",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,

    width: "80%",
    height: "3px",
    backgroundColor: "#166534",
    borderRadius: "4px",
  },
},
        }}
      >
        <Tab label="Personal" />
        <Tab label="Employement" />
        <Tab label="Payrole" />
        <Tab label="Document" />
        <Tab label="History" />
      </Tabs>

        {value === 0 && (
          <div className='flex justify-center items-center'>
        <EmployeeProfileInformation edit={editable} onCloseEdit={() => setEditable(false)}/></div>
      )}

      {value === 1 && (
        <div className="p-4  dark:!text-white ">My Documents</div>
      )}

      {value === 2 && (
        <div className="p-4  dark:!text-white ">Shared Documents</div>
      )}
      {value === 3 && (
  <div className="w-full min-w-0 pt-4">
    <DocumentCentersidemenu
      nav={false}
      embedded={true}
    />
  </div>
)}
      {value === 4 && (
        <div className="p-4  dark:!text-white ">Shared Documents</div>
      )}

    </div>

  </div>
     <Dialog
  open={photoDialog}
  onClose={handleCancelPhoto}
  fullWidth
  maxWidth="xs"
>

  <DialogTitle>
    <div className="flex justify-between items-center">

      <span className="text-lg font-semibold">
        Profile photo
      </span>

      <button
        type="button"
        aria-label="Close photo dialog"
        onClick={handleCancelPhoto}
        className="cursor-pointer"
      >
        <X size={22} />
      </button>

    </div>
  </DialogTitle>

  <DialogContent dividers>

    {/* Hidden file input */}

    <input
      type="file"
      ref={fileInputRef}
      accept="image/jpeg,image/png,image/webp"
      onChange={handleImageChange}
      className="hidden"
    />

    

    <div className="flex flex-col items-center gap-5 py-4">

      <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden bg-gray-200">

        <Image
          src={draftPreview || "/profile_pic_0.png"}
          alt="Profile picture preview"
          fill
          sizes="220px"
          unoptimized={!!draftPreview}
          className="object-cover"
        />

      </div>

      

      {draftImage && (
        <p className="text-sm text-gray-500 break-all text-center">
          {draftImage.name}
        </p>
      )}



      <div className="flex flex-wrap justify-center gap-3">

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <Camera size={18} />
          Change photo
        </button>

        <button
          type="button"
          onClick={handleRemovePhoto}
          className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-red-600 cursor-pointer"
        >
          <Trash2 size={18} />
          Remove
        </button>

      </div>

      <p className="text-xs text-gray-500">
        JPG, PNG, WEBP — Maximum 5 MB
      </p>

      {imageError && (
        <p className="text-sm text-red-500">
          {imageError}
        </p>
      )}

    </div>

  </DialogContent>

  <DialogActions sx={{ padding: "16px" }}>

    <button
      type="button"
      onClick={handleCancelPhoto}
      className="border rounded-full px-5 py-2 cursor-pointer"
    >
      Cancel
    </button>

    <button
      type="button"
      onClick={handleSavePhoto}
      className="bg-secondary text-white rounded-full px-5 py-2 cursor-pointer"
    >
      Save photo
    </button>

  </DialogActions>

</Dialog>
</div>

  )
}

export default EmployeeProfile