import { Document, Page, pdfjs } from 'react-pdf';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from 'shared/ui/button';
import { pdfViewerActions } from '../model/slice';
import { Modal } from 'shared/ui/Modal';
import { RootState } from 'app/stores';

import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.js';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
export const PdfViewerModal = () => {
  const dispatch = useDispatch();
  const { isOpen, fileUrl } = useSelector((state: RootState) => state.pdfViewer);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleClose = () => {
    dispatch(pdfViewerActions.close());
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="PDF Viewer" maxWidth="90vw">
      <div className="pdf-controls">
        <Button onClick={() => setScale((prev) => Math.max(0.5, prev - 0.1))}>-</Button>
        <span>{(scale * 100).toFixed(0)}%</span>
        <Button onClick={() => setScale((prev) => prev + 0.1)}>+</Button>
      </div>

      <div className="pdf-container">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading PDF...</div>}
          error={<div>Error loading PDF</div>}
        >
          <Page pageNumber={pageNumber} width={window.innerWidth * 0.8} scale={scale} />
        </Document>
      </div>

      <div className="pdf-navigation">
        <Button
          onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
          disabled={pageNumber <= 1}
        >
          Previous
        </Button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <Button
          onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
          disabled={pageNumber >= numPages}
        >
          Next
        </Button>
      </div>
    </Modal>
  );
};
