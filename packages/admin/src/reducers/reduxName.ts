import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameAction {
  name: string;
}

export const slice = createSlice({
  name: 'name',
  initialState: {
    value: 'tom is configuring ci/cd',
  },
  reducers: {
    change: (state, action: PayloadAction<NameAction>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload.name;
    },
  },
});

export const { change } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectName = (state: any) => state.name.value;

export default slice.reducer;
