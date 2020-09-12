import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

export const GetDataToken = () => {
  const [state, setstate] = useState();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const api = process.env.REACT_APP_API;
  const getData = async () => {
    await axios
      .get(`${api}`)
      .then((res) => {
        setstate(
          res.data.result.map((res: any) => ({
            Name: res.tokenName,
            Symbol: res.tokenSymbol,
            Value: res.value,
            Id: res.blockHash,
          }))
        );
      })
      .catch((err) => console.log(err));
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
  return <Table dataSource={state} columns={columns} rowKey="Id" />;
};
