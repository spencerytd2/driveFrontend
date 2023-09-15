import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { get } from "lodash";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  getFilesOfFolder,
  createFolder
} from "stores/reducers/folderFile";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => get(state, "userStore.user"));
  const [folderFiles, setFolderFiles] = useState(1);

  let folders = useSelector((state) =>
    get(state, "folderFileStore.folders")
  );
  folders = folders[0]

  // useEffect(() => {
  //   if (user.subscriptionId == null) {
  //     //show for first time only
  //     if (getCookie("seterror") == "") {
  //       setCookie("seterror", true, 30);
  //       showToaster();
  //     } else {
  //       let hasSeenError = getCookie("seterror");
  //       if (!hasSeenError) {
  //         showToaster();
  //       }
  //     }
  //   }
  // }, [user.subscriptionId]);
  useEffect(() => {
    dispatch(getFilesOfFolder(null));
  }, []);
  return (
    <div className="w-full">
      <h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
        Hi, {get(user, "firstName")} {get(user, "lastName")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-7">
        <div className="bg-[#40189D] px-6 py-10 relative rounded-lg flex justify-between">
          <div>
            <Link to ={`/data/${get(folders, "_id")}`}>
              <img
                src={require("../../icons/folder.png")}
                alt="img"
                height="64px !important"
              />
            </Link>
          </div>
          <div className="text-white flex flex-col gap-2 items-end">
              <h3 className="text-lg">
                {get(folders, "title")}
              </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
