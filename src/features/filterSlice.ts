import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
  searched: "",
  currentPage: 1,
};

interface IInetialState {
  selectedTags: string[];
  searched: string;
  currentPage: number;
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTag: (state: IInetialState, { payload }: PayloadAction<string>) => {
      state.selectedTags.push(payload);
      state.currentPage = 1;
    },

    removeTag: (state: IInetialState, { payload }: PayloadAction<string>) => {
      const indexToRemove = state.selectedTags.indexOf(payload);
      if (indexToRemove !== -1) state.selectedTags.splice(indexToRemove, 1);
    },

    search: (state: IInetialState, { payload }: PayloadAction<string>) => {
      state.searched = payload;
      state.currentPage = 1;
    },

    reset: (state: IInetialState) => {
      state.searched = "";
      state.selectedTags = [];
      state.currentPage = 1;
    },

    updatePage: (state: IInetialState, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
  },
});

export default filterSlice.reducer;
export const { addTag, removeTag, search, reset, updatePage } = filterSlice.actions;
