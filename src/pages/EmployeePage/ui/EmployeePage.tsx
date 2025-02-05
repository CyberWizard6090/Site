import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Block } from "shared/ui/block";
import { ImageView } from "shared/ui/imageView";
import DefaultPhoto from "shared/assets/image/400x300.png"
import "./EmployeePage.scss"

export const EmployeePage = () => {
  const data: any = useLoaderData();
  const Photo = data.photo;

  return (
    <div className="employee-page">
      <Block>
        <div className="employee-page__block">
      <div className="employee-page__photo">
          <ImageView url={Photo ? data.photo.sizes.card.url:DefaultPhoto} />
        </div>
        <div className="employee-page__info">
        <header className="employee-page__header">
          <h2 className="employee-page__name">{data.fullName}</h2>
        </header>
      
        <h3 className="employee-page__position">{data.position}</h3>

        <div className="employee-page__departments">
          {data.departments?.map(
            (department: {
              id: React.Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <Link
                to={"/departments/" + department.id}
                key={department.id}
                className="employee-page__department-link"
              >
                <p>{department.name}</p>
              </Link>
            )
          )}
        </div>
        {data.education && (
          <p className="employee-page__education">{data.education}</p>
        )}
        </div>
        </div>
      </Block>
    </div>
  );
};
