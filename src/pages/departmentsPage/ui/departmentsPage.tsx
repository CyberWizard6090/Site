import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Block } from 'shared/ui/block';
import { Loader } from 'shared/ui/loader';
import './departmentsPage.scss';
type DepartmentProps = {
  id: string;
  name: string;
};

export const DepartmentsPage = () => {
  const url = '/api/departments?limit=100';
  const [data, setData] = useState<DepartmentProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched blocks:', data); // Inspect fetched data
        setData(data.docs || []);
      })
      .catch((err) => {
        console.error('Fetch error:', err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="DepartmentsPage">
      {data.map((Department, index) => (
        <Link key={index} to={'/departments/' + Department.id}>
          <Block>{Department.name}</Block>
        </Link>
      ))}
    </div>
  );
};
