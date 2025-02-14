import { useLoaderData } from "react-router-dom";
import { Block } from "shared/ui/block";
import { SimpleRichText } from "shared/ui/blocks";
import { ImageView } from "shared/ui/imageView";
import { EmployeeList } from "widgets/EmployeeList";
import "./departmentPage.scss";

type Props = {};


export const DepartmentPage = (props: Props) => {
  const data: any = useLoaderData();
  return (
    <div className="DepartmentPage">
      <h1>{data.name}</h1>
   
      <Block>
      {data.image? <ImageView url={data.image.sizes.thumbnail.url}/>: <></>}
        <SimpleRichText body={data.description} />
      </Block>
      <h2>Сотрудники нашего отдела</h2>
     <EmployeeList List={data.employee}/>
    </div>
  );
};
