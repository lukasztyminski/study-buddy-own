// import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialNotesState = [{ id: uuid(), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet' }];

// export const addNote = (payload) => {
//   return {
//     type: 'notes/add',
//     payload: {
//       id: uuid(),
//       ...payload,
//     },
//   };
// };

// export const removeNote = (payload) => {
//   return {
//     type: 'notes/remove',
//     payload,
//   };
// };

// const notesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'notes/add':
//       return { ...state, notes: [...state.notes, action.payload] };
//     case 'notes/remove':
//       return {
//         ...state,
//         notes: state.notes.filter((note) => note.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotesState,
  reducers: {
    addNote(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

// export const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});
