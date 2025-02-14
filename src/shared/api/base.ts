import { useEffect, useState } from 'react';

type Props = {
  URL: string;
};

export const GetData = ({ URL }: Props) => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(URL, {
      // mode: 'no-cors',
      // // method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.docs);
        setPageData(data.docs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return pageData;
};
