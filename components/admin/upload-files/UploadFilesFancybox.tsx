"use client"

import { ChangeEvent, useState } from "react";

export default function UploadFilesFancybox({ currentDir }: { currentDir: string }) {

  const [pathName, setPathName] = useState(currentDir);
  const [files, setFiles] = useState<File[]>([]);

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  async function handleFilesSelectChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    // const fileSrc = [...e.target.files];
    const fileSrc = Array.from(e.target.files);
    setFiles(fileSrc);


    const tempFilesURL = [];
    for (const file of fileSrc) {
      tempFilesURL.push(URL.createObjectURL(file));
    }

    setPreviewImages(tempFilesURL);
  }

  async function handleUploadFiles(e: React.SyntheticEvent) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('pathName', pathName);
    Array.from(files).forEach(file => {
      formData.append('files', file);
    })

    const res = await fetch('/api/admin/file-manager', {
      method: "POST",
      body: formData
    })

    if (res.ok) {
      // console.log(res);
      setPathName(currentDir);
      for (const file of previewImages) {
        URL.revokeObjectURL(file);
      }
      setFiles([]);
    }
  }

  let [isUploadFilesFancyboxOpen, setIsUploadFilesFancyboxOpen] = useState<boolean>(false);
  function toggleUploadFilesFancybox(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsUploadFilesFancyboxOpen(isUploadFilesFancyboxOpen = !isUploadFilesFancyboxOpen);

    return isUploadFilesFancyboxOpen;
  }

  return (
    <>
      <button className="border p-2 mb-5 rounded hover:bg-blue-600 hover:text-white" onClick={toggleUploadFilesFancybox}><i className="fa-solid fa-upload"></i> Uploads</button>

      <div className={isUploadFilesFancyboxOpen == false ? "hidden" : "block"}>
        <form onSubmit={handleUploadFiles} className="mt-8 space-y-3 w-1/4" >
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Directory</label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={pathName}
              onChange={e => setPathName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center">
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    {previewImages.map((image, index) => (
                      <img key={index} src={image} alt="" />
                    ))}
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer
                  </p>
                </div>
                <input type="file" className="hidden" multiple onChange={handleFilesSelectChange} />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
