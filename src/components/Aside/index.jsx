import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import {useNavigate, useLocation} from 'react-router-dom'
import { ReadOutlined, EditOutlined, DatabaseOutlined } from '@ant-design/icons';
import './index.css'
export default function Aside() {
  const [defaultKey,setDefaultKey]=useState('')
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
 const path = location.pathname
 const key = path.split('/')[1];
  setDefaultKey(key)
  },[location.pathname])
  const handleClick = (e)=>{
   navigate('/'+e.key)
}
    return (
        <Menu 
            onClick={handleClick}
            selectedKeys={[defaultKey]}
            className='aside'
        >
            <Menu.Item key='list'><ReadOutlined /> 文章列表</Menu.Item>
            <Menu.Item key='edit' ><EditOutlined /> 文章编辑</Menu.Item>
            <Menu.Item key='means'><DatabaseOutlined /> 修改资料</Menu.Item>
        </Menu>
    )
}
