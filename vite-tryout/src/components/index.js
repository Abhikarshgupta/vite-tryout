import App from '../App';
import React, { useEffect } from 'react';

const index = () => {
  return (
    <div>
      index1 <App />
    </div>
  );
};
const x = useEffect(() => {}, []);
export default index;
