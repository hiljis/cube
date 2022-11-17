import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTheme } from './themeAPI.js';

const initialState = {
	current: 'blue',
	status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchThemeAsync = createAsyncThunk(
	'theme/fetchTheme',
	async () => {
		const response = await fetchTheme();
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setTheme: (state, action) => {
			state.current = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTheme = (state) => state.theme.current;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
// 	const currentValue = selectCount(getState());
// 	if (currentValue % 2 === 1) {
// 		dispatch(incrementByAmount(amount));
// 	}
// };

export default themeSlice.reducer;
