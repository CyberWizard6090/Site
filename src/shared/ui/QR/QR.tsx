import { QRCodeSVG } from "qrcode.react";
import './QR.scss'
type Props = {
  URL: string;
  Size?: number
};

export const QR = ({ URL,Size = 128}: Props) => {
  return (
    <div className="qr-code-wrap">
   
      <QRCodeSVG value={URL} size={Size}/>
    </div>
  );
};

 
