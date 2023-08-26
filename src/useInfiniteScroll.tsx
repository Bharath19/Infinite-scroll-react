import React from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const useInfiniteScroll = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasNext, sethasNext] = React.useState(true);
  const limit = 10;

  const fetchData = async () => {
    try {
      //Simulate delay for the demonstration
      await new Promise((reslove) => setTimeout(reslove, 1000));

      const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
      const limitHeader = response.headers.get('link');
      const hasMore =
        page > 5 ? false : limitHeader && limitHeader.includes('rel="next"');
      const jsonData = await response.json();
      if (jsonData) {
        setData((preValue) => [...preValue, ...jsonData]);
        sethasNext(hasMore);
      }
    } catch (error) {
      console.error('Something went wrong!!!');
      setPage(1);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [page]);

  const next = () => {
    hasNext && setPage((prevPage) => prevPage + 1);
  };
  return { data, page, hasNext, next };
};

export default useInfiniteScroll;
