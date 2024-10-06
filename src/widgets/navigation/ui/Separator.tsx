import React from "react";
type Props = {
  label: string;
};
export const Separator = ({ label }: Props) => {
  return (
    <div className="SeparatorMenu">
      <div>{label}</div>
      <hr />
    </div>
  );
};
