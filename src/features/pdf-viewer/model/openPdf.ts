import { useDispatch } from 'react-redux';
import { pdfViewerActions } from './slice';

export function useOpenPdf() {
  const dispatch = useDispatch();

  return (path: string) => {
    dispatch(pdfViewerActions.open(path));
  };
}
