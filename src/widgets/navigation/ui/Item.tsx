import { Link } from "react-router-dom";

type Props = {
  label: string;
  link: string;
};

export const Item = ({ label, link }: Props) => {
  return (
    <Link to={link} >
      <li ><div  data-action="clicked_links" className="hover__item ui-vertical-navigation-item__wrapper">{label}</div></li>
    </Link>
  );
};


