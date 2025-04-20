import { useDispatch } from 'react-redux';
import { pdfViewerActions } from '../model/slice';
import { Button } from 'shared/ui/button';
import { ReactComponent as ReadIcon } from 'shared/assets/svg/SVG-DOCS-ICONS/txt-document-svgrepo-com.svg';
interface OpenPdfButtonProps {
  path: string;
}

export const OpenPdfButton = ({ path }: OpenPdfButtonProps) => {
  const dispatch = useDispatch();
  return (
    <Button
      theme="transparent-blue"
      Icon={ReadIcon}
      onClick={() => dispatch(pdfViewerActions.open('http://127.0.0.1:3000/' + path))}
    >
      {'Читать'}
    </Button>
  );
};
