import React, {useEffect, useState} from 'react'
import logoImg from '../../assets/logo.png'
import defaultAvatar from '../../assets/defaultAvatar.png';
import { useNavigate } from 'react-router-dom';
import { Menu, Dropdown, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import './index.less'
export default function Header() {
     const [avatar,setAvatar] = useState(defaultAvatar)
     const [username,setUsername] = useState('游客')
     const navigate = useNavigate()
     useEffect(()=>{
        let username1 = localStorage.getItem('username')
        let avatar1 = localStorage.getItem('avatar')
        if(username1){
            setUsername(username1)
        }
        if(avatar1){
            setAvatar('http://47.93.114.103:6688/'+ avatar1)
        }
    },[])
    const logout = () => {
        message.success('退出成功，即将返回登录页')
        localStorage.clear();   // 清除localStorage中的数据
        setTimeout(() => navigate('/login'), 1500) 
    } 

    const menu = (
        <Menu>
            <Menu.Item key={1}>修改资料</Menu.Item>
            <Menu.Divider />
            <Menu.Item key={2} onClick={logout}>退出登录</Menu.Item>
        </Menu>
    );
    
    return (
        <header>
        <img src={logoImg} alt="" className="logo" />
            <div className="right">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                         <img src={avatar} className="avatar" alt="" />
                         <span>{username}</span>
                        <CaretDownOutlined />
                    </a>
                </Dropdown>
            </div>
        </header>
  )
}
