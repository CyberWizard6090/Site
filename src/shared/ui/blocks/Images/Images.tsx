import { ImageView } from "shared/ui/imageView";
import "./Images.scss";
type Props = {
  images: any;
};

export const Images = ({ images }: Props) => {
 console.log(images)
    return (
    <div className="block__images">
        
      {images.map((item: any) => {
       return <ImageView url={item.image.url} />;
      })}
    </div>
  );
};
