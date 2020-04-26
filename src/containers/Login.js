import { connect } from 'react-redux'
import React, { useCallback } from "react";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col
} from 'antd';

import { authLogin } from '../actions/auth';

function Login({
  auth,
  authLogin,
}) {
  const handleOnFinish = useCallback(
    (data) => authLogin(data),
    [authLogin],
  );

  return (
    <Row>
       <Col span={12} offset={6}>
       <Form
        name="basic"
        initialValues={{
         remember: true,
        }}
        onFinish={handleOnFinish}
        onFinishFailed={ () => console.log("ERROR")}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      > 
      <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]} >
        <Input.Password/>
      </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
               <Checkbox>Remember me</Checkbox>
            </Form.Item> 
            
            <Form.Item> 
                  <Button type="primary" htmlType="submit"> Submit
                             </Button>
            </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};

const mapStateToProps = ({auth}) => ({
  auth,
});

/* const mapDispatchToProps = dispatch => {
  authLogin,
}
 */

export default connect(mapStateToProps, {
  authLogin,
})(Login); 

