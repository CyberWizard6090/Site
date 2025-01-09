import React, { useEffect, useState } from "react";
import { Loader } from "shared/ui/loader";
import { Employee } from "widgets/Employee";
import "./personnelPage.scss"
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

export const PersonnelPage: React.FC<Props> = () => {
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
      <div className="Personnel__list">
        {data.map((doctor) => (
          <Employee
            key={doctor.id} // Use unique ID for the key prop
            id={doctor.id}
            url={doctor.photo?.sizes?.thumbnail?.url || ""}
            fullName={doctor.fullName}
            position={doctor.position}
            departments={doctor.departments}
            // education={doctor.education}
          />
        ))}
      </div>
    </div>
  );
};
