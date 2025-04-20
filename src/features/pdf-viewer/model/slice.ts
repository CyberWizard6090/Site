import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PdfViewerState {
  isOpen: boolean;
  fileUrl: string | null;
}

const initialState: PdfViewerState = {
  isOpen: false,
  fileUrl: null,
};

const pdfViewerSlice = createSlice({
  name: 'pdfViewer',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.fileUrl = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
      state.fileUrl = null;
    },
  },
});

export const { actions: pdfViewerActions } = pdfViewerSlice;
export const { reducer: pdfViewerReducer } = pdfViewerSlice;
