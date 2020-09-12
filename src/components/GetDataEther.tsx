import React, { useState } from 'react';
import Web3 from 'web3';
import { Card } from 'antd';

export const GetDataEther = () => {
  const [state, setstate] = useState(String);
  const url = 'https://mainnet.infura.io/v3/a20c791a94364b90acc254b28b09dcc3';
  const tokenAddress = '0xA145ac099E3d2e9781C9c848249E2e6b256b030D';
  const web3 = new Web3(new Web3.providers.HttpProvider(url));
  web3.eth.getBalance(tokenAddress, (err, result) => {
    err ? console.log(err) : setstate(web3.utils.fromWei(result));
  });

  return <Card title="Ether">{state}</Card>;
};
