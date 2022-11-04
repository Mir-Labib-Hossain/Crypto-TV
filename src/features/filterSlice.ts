import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
  searched: "",
};

interface IInetialState {
  selectedTags: string[];
  searched: string;
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTag: (state: IInetialState, { payload }: PayloadAction<string>) => {
      state.selectedTags.push(payload);
    },

    removeTag: (state: IInetialState, { payload }: PayloadAction<string>) => {
      const indexToRemove = state.selectedTags.indexOf(payload);
      if (indexToRemove !== -1) state.selectedTags.splice(indexToRemove, 1);
    },

    search: (state: IInetialState, { payload }: PayloadAction<string>) => {
      state.searched = payload;
    },
  },
});

export default filterSlice.reducer;
export const { addTag, removeTag, search } = filterSlice.actions;
