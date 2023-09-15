import Axios from "config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const getFilesOfFolder = createAsyncThunk(
  "folder/getFiles",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`folder/${id}`);
      return response.data;
    } catch (error) {
      // console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createFolder = createAsyncThunk(
  "folder/create",
  async (data , { rejectWithValue }) => {
    try {
      const response = await Axios.post(`folder`, data);
      return response.data;
    } catch (error) {
      // console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const createFile = createAsyncThunk(
  "folder/createfile",
  async (data , { rejectWithValue }) => {
    try {
      const response = await Axios.post(`folder/file`, data);
      return response.data;
    } catch (error) {
      // console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteFolderFile = createAsyncThunk(
  "folder/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.delete(`folder/${id}`);
      return response.data;
    } catch (error) {
      // console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  loading: false,
  user: null,
  errors: null,
  isGetFolder: false,
  isFolderCreated: false,
  isFileCreated: false,
  isFolderDeleted: false,
  folders: [],
};

const folderFileSlice = createSlice({
  name: "folderFile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get folders
    builder.addCase(getFilesOfFolder.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.folders = [];
      state.isFolderCreated = false;
      state.isFolderDeleted = false;
    });
    builder.addCase(getFilesOfFolder.fulfilled, (state, action) => {
      state.loading = false;
      state.folders = action.payload;
    });
    builder.addCase(getFilesOfFolder.rejected, (state, action) => {
      state.loading = false;
      state.folders = [];
      state.errors = {
        folders: action.payload,
      };
    });

    // create folder
    builder.addCase(createFile.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.isFolderCreated = false;
      state.isFolderDeleted = false;
      state.isFileCreated = false;
    });
    builder.addCase(createFile.fulfilled, (state, action) => {
      state.loading = false;
      state.isFileCreated = true
    });
    builder.addCase(createFile.rejected, (state, action) => {
      state.loading = false;
      state.errors = {
        folders: action.payload,
      };
      state.isFileCreated = false
    });

    // create file
    builder.addCase(createFolder.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.isFolderCreated = false;
      state.isFolderDeleted = false;
      state.isFileCreated = false;
    });
    builder.addCase(createFolder.fulfilled, (state, action) => {
      state.loading = false;
      state.folders = [action.payload, ...state.folders];
    });
    builder.addCase(createFolder.rejected, (state, action) => {
      state.loading = false;
      state.folders = [];
      state.errors = {
        folders: action.payload,
      };
    });

    // deleteFolderFile
    builder.addCase(deleteFolderFile.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.isFolderDeleted = false;
    });
    builder.addCase(deleteFolderFile.fulfilled, (state, action) => {
      state.loading = false;
      state.isFolderDeleted = true;
    });
    builder.addCase(deleteFolderFile.rejected, (state, action) => {
      state.loading = false;
      state.isFolderDeleted = false;
      state.errors = {
        deleteFolderFile: action.payload,
      };
    });
  },
});

export default folderFileSlice.reducer;
