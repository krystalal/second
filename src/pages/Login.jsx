import React from 'react'
import { Form, Input, Button } from 'antd';  
import './less/Login.css' ;
import { UserOutlined,KeyOutlined } from '@ant-design/icons'; 
import logoImg from '../assets/logo.png'
import{Link} from 'react-router-dom'
export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='login'>
      <div className='login_box'>
      <img src={logoImg} alt=''/>
       <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名！',
          },
        ]}
      >
        
        <Input prefix={<UserOutlined />}  size="large" placeholder='请输入用户名'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      >
        <Input.Password  prefix={<KeyOutlined />} size="large" placeholder='请输入密码'/>
      </Form.Item>

      <Form.Item>
         <Link to='/register'>还没账号？立即注册</Link> 
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block >
          登录
        </Button>
      </Form.Item>
    </Form>
    </div>
  </div>
  )
}
