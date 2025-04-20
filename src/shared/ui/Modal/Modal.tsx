import { useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: string;
  className?: string;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '600px',
  closeOnEsc = true,
  closeOnOverlayClick = true,
}: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose();
      }
    },
    [onClose, closeOnEsc],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="overlay__modal" style={{ maxWidth }}>
        {title && (
          <div className="overlay__header">
            <h2 className="overlay__title">{title}</h2>
          </div>
        )}

        <button className="overlay__closeButton" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="overlay__content">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
