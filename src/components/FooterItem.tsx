import React from "react";

type Props = {
  name: string;
  url: string;
};

const FooterItem = ({ name, url }: Props) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

export default FooterItem;
