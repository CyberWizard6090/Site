import React from "react";

type Props = {
  Name: string;
  List: any;
};

export const BlockFooter = ({ Name, List }: Props) => {
  return (
    <div className="BlockFooter">
      <h4 className="BlockFooter__title">{Name}</h4>
      <ul className="BlockFooter__List">
        {List.map((item: any) => (
          <li>
            <a href={item.Link}>{item.Name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
