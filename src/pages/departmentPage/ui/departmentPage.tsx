import React from "react";
import { useLoaderData } from "react-router-dom";
import { Employee } from "widgets/Employee";
import "./departmentPage.scss";
import { Block } from "shared/ui/block";
import { SimpleRichText } from "shared/ui/blocks";
import { ImageView } from "shared/ui/imageView";
import { Empty } from "shared/ui/empty";
type Props = {};
type EmployeeType = {
  id: string;
  fullName: string;
  position: string;
  education: string;
  departments: {
    id: string;
    name: string;
  }[];
  photo?: { sizes?: { thumbnail?: { url: string } } }; // Optional chaining compatibility
};

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
      <div className="DepartmentPage__employee-list">
        {data.employee && data.employee.map((employee: EmployeeType) => (
          <Employee
            key={employee.id}
            id={employee.id}
            url={employee.photo?.sizes?.thumbnail?.url || ""}
            fullName={employee.fullName}
            position={employee.position}
            // departments={employee.departments}
            // education={doctor.education}
          />
        ))}
        
      </div>
    </div>
  );
};
