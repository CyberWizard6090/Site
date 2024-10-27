import { QRCodeSVG } from "qrcode.react";
import "./QR.scss";
import { useFullScreen } from "features/FullScreenView";
type Props = {
  URL: string;
  Size?: number;
};

export const QR = ({ URL, Size = 128 }: Props) => {
  const { toggleState, children, setChildren } = useFullScreen();
  function transmission() {
    toggleState();
    setChildren(
      <div className="qr_code__wrap">
        <QRCodeSVG value={URL} size={524} bgColor={"transparent"} />
      </div>
    );
  }
  return (
    <div className="qr-code-wrap" onClick={transmission}>
      <QRCodeSVG value={URL} size={Size} bgColor={"transparent"} />
    </div>
  );
};
