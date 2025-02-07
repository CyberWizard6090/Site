import React, { useEffect, useState } from "react";
import { Loader } from "shared/ui/loader";

import "./personnelPage.scss"
import { EmployeeList } from "widgets/EmployeeList";
import { EmployeeType } from "shared/types/employee";



export const PersonnelPage = () => {
  const url = "/api/employee/";
  const [data, setData] = useState<EmployeeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blocks:", data); // Inspect fetched data
        setData(data.docs || []);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="Personnel">
      <h2>Список сотрудников</h2>
      <EmployeeList List={data}/>
     
    </div>
  );
};
