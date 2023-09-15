import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrashIcon,ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { get } from "lodash";
import { getFileIcon } from "../helpers/index";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  getFilesOfFolder,
  createFolder,
  deleteFolderFile,
  createFile
} from "stores/reducers/folderFile";

const AccountStatus = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const [folderTxt, setfolderTxt] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [newFolderName, setFolderName] = useState("");
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const user = useSelector((state) => get(state, "userStore.user"));
  const [file, setFile] = useState(null);

  const folders = useSelector((state) =>
    get(state, "folderFileStore.folders")
  );
  const isFolderCreated = useSelector((state) =>
    get(state, "folderFileStore.isFolderCreated")
  );
  const isFileCreated = useSelector((state) =>
    get(state, "folderFileStore.isFileCreated")
  );
  const isFolderDeleted = useSelector((state) =>
    get(state, "folderFileStore.isFolderDeleted")
  );

  const fileChangeHandler = (event) => {
    const file = event.target.files[0]
    setFile(file);
    console.log('file', file)
    const formData = new FormData();
    // Update the formData object
    formData.append("folder_id", params.id);
    formData.append(
      "file",
      file,
      file.name
    );
    dispatch(createFile(formData))
  };

  const handleAddObject = (value) => {
    setfolderTxt((prev) => [
      ...prev,
      {
        id: folderTxt.length + 1,
        image:
          value === "folder"
            ? require("../icons/folder.png")
            : require("../icons/Files.png"),
        title: value === "folder" ? "Hello" : file.name,
        value: file,
      },
    ]);
    
    setFile(null);
  };

  useEffect(() => {
    dispatch(getFilesOfFolder(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (!!isFolderCreated || !!isFileCreated || !!isFolderDeleted) {
      dispatch(getFilesOfFolder(params.id));
    }
  }, [isFolderCreated, dispatch, params.id, isFileCreated, isFolderDeleted]);

  const folderAdd = () => {
    const data = {
      id: folderTxt.length + 1,
      image: require("../icons/folder.png"),
      title: newFolderName,
      value: file,
      folderId: params.id
    };
    setfolderTxt((prev) => [...prev, data]);
    setFolderName("");
    dispatch(createFolder(data));
    setShowAddFolderModal(false);
    
  };

  const handleDeleteObject = (index, itemId) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const updatedFolderTxt = [...folderTxt];
      updatedFolderTxt.splice(index, 1);
      setfolderTxt(updatedFolderTxt);
      dispatch(deleteFolderFile(itemId));
    }
  };

  // Create an array of objects with Link components
  const dataObjects = folders.map((item, i) => (
      <div className="media-tile pl-4 pb-4 relative rounded-lg mb-5">
       <div className=" flex justify-between">
        <div className="text-xxs pt-2 text-white">
            {moment(get(item, "createdAt")).format("DD/MM/YYYY")}
          </div>
          <div className=" inline-flex media-button-bar w-full">
            <div className="media-button">  <TrashIcon onClick={() => handleDeleteObject(i, item._id)} className="w-6 cursor-pointer text-[red]" /></div>
            {get(item, "is_folder")?'':<div className="media-button"> <a  href={item.download_url}> <ArrowDownTrayIcon  className="w-6 text-[green]" /> </a></div>}
          </div>
       </div>
        <Link className="text-[#ffa500]" to ={get(item, "is_folder")?`/data/${get(item, "_id")}`:''}>
        <div className="text-white flex justify-between pr-4 cursor-pointer media-grid">
          {get(item, "is_folder")? 
                   <img
                   src={require("../icons/folder.png")}
                   alt="img"
                   className="w-14 h-12"
                 />
              :  getFileIcon(get(item,'title')) }
                
                <small className="pt-4">{item.title.slice(0,25)}{item.title.length>25?'...':''}</small>
          </div>
        </Link>
      </div>
  ));

  return (
    <div className="w-full mb-[170px]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
            Hi, {user?.firstName} {user?.lastName}
          </h2>
          <div>
            <button
              className="bg-sky-400 mr-3 py-2 px-3 w-24 text-white hover:bg-sky-400 "
              onClick={() => setShowAddFolderModal(true)}
            >
              +
            </button>
            <button
              className="bg-sky-400 py-2 px-3 w-24 text-white hover:bg-sky-400"
              onClick={() => setShowModal(true)}
            >
              upload
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-7">
          {dataObjects}
        </div>
      </div>

      {showModal ? (
        <>
          <div className="bg-[#00000078] justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              style={{ marginTop: "25%" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                <input onChange={fileChangeHandler} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                </div>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    disabled={!file}
                    onClick={() => {
                      handleAddObject("file");
                      setShowModal(false);
                    }}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showAddFolderModal ? (
        <>
          <div className="bg-[#00000078]  justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              style={{ marginTop: "25%" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <label className="w-full">Folder Name </label>
                  <input
                    type="text"
                    className="p-2 ml-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setFolderName(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAddFolderModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      folderAdd();
                    }}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AccountStatus;