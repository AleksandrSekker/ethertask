import React, { useState } from 'react';
import Web3 from 'web3';
import { Card } from 'antd';

export const GetDataEther = () => {
  const [state, setstate] = useState(String);
  const url = process.env.REACT_APP_URL;
  const tokenAddress = process.env.REACT_APP_TOKEN_ADDRESS;
  const web3 = new Web3(new Web3.providers.HttpProvider(`${url}`));
  web3.eth.getBalance(`${tokenAddress}`, (err, result) => {
    err ? console.log(err) : setstate(web3.utils.fromWei(result));
  });
  return (
    <div>
      <Card title="Ether">{state}</Card>
    </div>
  );
};
