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
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

export const FormAddress = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} style={{paddingRight: "100px", paddingTop: "40px"}}name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['add', 'name']}
        label="Name"
        rules={[
          {
            type: 'text',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['add', 'phone']}
        label="Phone Number"
        rules={[
          {
            type: 'text',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['add', 'province']}
        label="Province"
        rules={[
          {
            type: 'text',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['add', 'city']} label="City">
        <Input />
      </Form.Item>
      <Form.Item name={['add', 'detail']} label="Street">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['add', 'postcode']} label="Post Code">
        <Input />
      </Form.Item>
    </Form>
  );
};
