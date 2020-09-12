import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
interface Props {}

export const GetDataToken = (props: Props) => {
  const [state, setstate] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(
        'https://api.etherscan.io/api?module=account&action=tokentx&address=0xA145ac099E3d2e9781C9c848249E2e6b256b030D&startblock=0&endblock=999999999&sort=asc&apikey=RXV9BUPW94J16JQC829C1Y8RHNAR637BDU'
      )
      .then((res) => {
        console.log(res.data.result);
        setstate(
          res.data.result.map((res: any) => ({
            Name: res.tokenName,
            Symbol: res.tokenSymbol,
            Value: res.value,
          }))
        );
      });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'name',
    },
    {
      title: 'Symbol',
      dataIndex: 'Symbol',
      key: 'symbol',
    },
    {
      title: 'Value',
      dataIndex: 'Value',
      key: 'value',
    },
  ];
  return <Table dataSource={state} columns={columns} />;
};
