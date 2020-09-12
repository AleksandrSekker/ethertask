import React from 'react';
import 'antd/dist/antd.css';
import { GetDataEther } from './components/GetDataEther';
import { GetDataToken } from './components/GetDataToken';

const App = () => {
  return (
    <>
      <GetDataEther />
      <GetDataToken />
    </>
  );
};
export default App;
