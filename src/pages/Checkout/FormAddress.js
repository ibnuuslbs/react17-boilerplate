import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { CodepenCircleFilled } from "@ant-design/icons";

export const FormAddress = (props) => {
  const onFinish = (values) => {
    props.onCreateAddress(values);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  // const validateMessages = {
  //   required: '${label} is required!',
  //   types: {
  //     email: '${label} is not a valid email!',
  //     number: '${label} is not a valid number!',
  //   },
  //   number: {
  //     range: '${label} must be between ${min} and ${max}',
  //   },
  // };
  /* eslint-enable no-template-curly-in-string */



  return (
    <Form
      {...layout}
      style={{ paddingRight: "100px", paddingTop: "40px" }}
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item name={["id"]} label="Id">
        <InputNumber />
      </Form.Item>
      <Form.Item name={["name"]} label="Name">
        <Input />
      </Form.Item>
      <Form.Item name={["phone"]} label="Phone Number">
        <Input />
      </Form.Item>
      
      <Form.Item name={["province"]} label="Province">
        <Input />
      </Form.Item>
      <Form.Item name={["city"]} label="City">
        <Input />
      </Form.Item>
      <Form.Item name={["detail"]} label="Street">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={["postcode"]} label="Post Code">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
