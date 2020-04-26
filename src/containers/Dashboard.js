import React from "react";

import { Table } from 'antd';
import { Resizable } from 'react-resizable';

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={resizeHandle => (
        <span
          className={`react-resizable-handle react-resizable-handle-${resizeHandle}`}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      )}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Dashboard extends React.Component {
  state = {
    columns: [
      {
        title: 'Category',
        dataIndex: 'category',
        width: 100,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Transaction Type',
        dataIndex: 'type',
        width: 100,
      },
      
      {
        title: 'Description',
        dataIndex: 'description',
        width: 100,
      },
      {
        title: 'Recurring Transaction',
        dataIndex: 'is_recurring',
        width: 100,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        width: 100,
      },
    ],
  };

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      category: 'income',
      type: 'Credit',
      description: 'transfer',
      is_recurring: 'true',
    },
    {
      key: 1,
      date: '2018-02-11',
      amount: 123540,
      category: 'Plot purchase',
      type: 'Debit',
      description: 'I gifted a plot to nature',
      is_recurring: 'false',
    },
    {
      key: 2,
      date: '2018-02-11',
      amount: 120,
      category: 'income',
      type: 'Credit',
      description: 'transfer',
      is_recurring: 'true',
    },
    {
      key: 3,
      date: '2018-02-11',
      amount: 1240,
      category: 'Satta',
      type: 'Debit',
      description: 'party',
      is_recurring: 'true',
    },
    {
      key: 4,
      date: '2018-02-11',
      amount: 353453,
      category: 'income',
      type: 'Credit',
      description: 'transfer',
      is_recurring: 'false',
    },
  ];

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <Table bordered components={this.components} columns={columns} dataSource={this.data} />;
  }
}

export default Dashboard;
