import React from 'react'
import { Form, Input, Button, message } from 'antd';  
import './less/Register.css' ;
import { UserOutlined,LockOutlined } from '@ant-design/icons'; 
import logoImg from '../assets/logo.png'
import{Link, useNavigate} from 'react-router-dom'
import { RegisterApi } from '../request/api';
export default function Register() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    RegisterApi({
      username:values.username,
      password:values.password
    }).then(res=>{
      if(res.errCode===0){
        message.success(res.message)
        setTimeout(()=>navigate('/login'),1500)
      }
      console.log(res)
    })
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='register'>
    <div className='register_box'>
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
      <Input.Password  prefix={<LockOutlined />}  size="large" placeholder='请输入密码'/>
    </Form.Item>
    <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认密码！',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('您输入的两次密码不同！'));
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined />} size="large" placeholder='请再次确认密码' />
      </Form.Item>
    <Form.Item>
       <Link to='/login'>已有账号？立即登录</Link> 
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" block >
        注册
      </Button>
    </Form.Item>
  </Form>
  </div>
</div>
  )
}
