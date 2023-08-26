import * as React from 'react';
import './style.css';
import useInfiniteScroll from './useInfiniteScroll';
import { Header } from './Header';
import { SpinnerIcon } from './SpinnerIcon';

export default function App() {
  const lastElement = React.useRef(null);
  const { data, hasNext, next } = useInfiniteScroll();
  const last = data[data.length - 1];

  React.useEffect(() => {
    const callbackFn = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hasNext && next();
        }
      });
    };

    const options = {
      threshold: [0.5],
    };
    let observer = new IntersectionObserver(callbackFn, options);
    lastElement.current && observer.observe(lastElement.current);

    return () => observer.disconnect();
  }, [data]);

  return (
    <div>
      <Header />
      <hr />
      <h2>Todo Title</h2>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        {last && (
          <li key={last.id} ref={lastElement}>
            {last.title}
          </li>
        )}
      </ul>
      {hasNext && (
        <div className={'info'}>
          <SpinnerIcon /> Loading
        </div>
      )}
      {!hasNext && <div className={'info'}> All the data loaded </div>}
    </div>
  );
}
