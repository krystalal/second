import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import {useLocation} from 'react-router-dom'
export default function Bread() {
  const {pathname} = useLocation()
  const[breadName,setBreadName]=useState('')
  useEffect(()=>{
    switch(pathname){
      case '/list':
          setBreadName('查看文章列表');
          break;
      case '/edit':
          setBreadName('文章编辑');
          break;
      case './means':
          setBreadName('修改个人资料')  
          break;  
      default:
          break;
    }
  },[pathname])
  return (
  <Breadcrumb className='bread'>
    <Breadcrumb.Item href="/">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item>{breadName}</Breadcrumb.Item>
  </Breadcrumb>
  )
}
