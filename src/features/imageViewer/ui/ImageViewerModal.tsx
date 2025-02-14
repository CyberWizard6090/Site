import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ImageViewerModal.scss'; // Стили для модального окна
import { closeImage } from '../model/imageViewerSlice ';
import { RootState } from 'app/stores';

export const ImageViewerModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, imageUrl } = useSelector((state: RootState) => state.imageViewer);

  if (!isOpen || !imageUrl) return null;

  return (
    <div className="image-viewer-modal" onClick={() => dispatch(closeImage())}>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Full size" className="image-viewer-image" />
      </div>
    </div>
  );
};
