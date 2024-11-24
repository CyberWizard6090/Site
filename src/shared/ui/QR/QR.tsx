import { QRCode } from 'antd';
import "./QR.scss";
import { useFullScreen } from "features/FullScreenView";
type Props = {
  URL: string;
  Size?: number;
};

export const QR = ({ URL, Size = 300 }: Props) => {
  const { toggleState, setChildren } = useFullScreen();
  function transmission() {
    toggleState();
    setChildren(
      <div className="qr_code__wrap">
         <QRCode type={"svg"} value={URL} size={600} bgColor={"transparent"} color={"var( --QRClolor)"}/>
        {/* <QRCodeSVG  /> */}
      </div>
    );
  }
  return (
    <div className="qr-code-wrap" onClick={transmission}>
       <QRCode type={"svg"} value={URL} size={Size} bgColor={"transparent"} color={"var( --QRClolor)"}/>
    </div>
  );
};
