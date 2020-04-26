import React from "react";

import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const FormTransaction = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name={['user', 'category']}
        label="Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'amount']}
        label="Amount"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'transaction-type']}
        label="Transaction Type"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTransaction;