import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";
import { TrashIcon, ArrowDownTrayIcon, FolderIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import moment from "moment";
import {getFileIcon} from '../helpers/index'
import { getFilesOfFolder, deleteFolderFile } from "stores/reducers/folderFile";

const Media = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const medias = useSelector((state) => get(state, "folderFileStore.folders"));
  const isFolderDeleted = useSelector((state) =>
    get(state, "folderFileStore.isFolderDeleted")
  );

  useEffect(() => {
    dispatch(getFilesOfFolder(params.id||null));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (!!isFolderDeleted) {
      dispatch(getFilesOfFolder(params.id||null));
      toast.success("Deleted!");
    }
  }, [isFolderDeleted, dispatch]);

  const handleDelete = (id) => () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(deleteFolderFile(id));
    }
  };
  const getReadableFileSizeString = (fileSizeInBytes)=> {
    if(!fileSizeInBytes){
      return 'N/A'
    }
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes /= 1024;
      i++;
    } while (fileSizeInBytes > 1024);
  
    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
      <h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
        Users Media
      </h3>
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-fixed w-full text-sm">
          <thead>
            <tr>
              <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
              User
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
              Icon
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
              Title
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                Status
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Size
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
              Created At
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Updated At
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {medias?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-slate-300">
                  Empty
                </td>
              </tr>
            )}
            {medias.map((data, key) => (
              <tr key={key}>
                 <td className="border-b border-slate-100 p-4 text-slate-500">
                {get(data, "user.firstName")}  {get(data, "user.lastName")}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                {get(data, "is_folder")?  <Link to ={`/media/${get(data, "_id")}`}>
                <FolderIcon className="w-12 h-12" />
                    {get(data, "title")}
              </Link>:
              getFileIcon(get(data,'title')) }
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                 {get(data,'title')}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  {get(data, "status") ? 'Active' : 'Not Active'}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 ">
                    {getReadableFileSizeString(get(data, "file_size"))}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 ">
                {moment(get(data, "createdAt")).format("DD/MM/YYYY")}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 ">
                {moment(get(data, "updatedAt")).format("DD/MM/YYYY")}
                </td>
                <td className="border-slate-100 cursor-pointer  pt-9 inline-flex text-slate-500">
                  <TrashIcon  onClick={handleDelete(data._id)} className="w-8 text-[red]" /> 
                  {get(data, "is_folder")?'': <a  href={data.download_url}> <ArrowDownTrayIcon  className="w-8 text-[red]" /> </a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Media;
