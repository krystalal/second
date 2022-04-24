import React,{useState,useEffect} from 'react'
import { List,Button, Skeleton,Pagination,message } from 'antd';
import { ArticleListApi,ArticleDelApi } from '../request/api';
import './less/Listlist.less'
import { useNavigate } from 'react-router-dom';
export default function Listlist() {
  const navigate = useNavigate()
  const [list,setList]=useState([])
  //const [pageSize,setPageSize]=useState(10)
  const [update,setUpdate]= useState(1)
  const [total,setTotal]=useState(0)
  const [current,setCurrent]=useState(0)
  const getList = (num)=>{
    ArticleListApi({
      count:10,
      num
    }).then(res=>{
      if(res.errCode===0)
      {
          let {arr,total,num} = res.data
          setList(arr)
          setCurrent(num)
          setTotal(total)
          //setPageSize(count)

      }
    })
  }
  //请求数据 
  useEffect(()=>{
    getList(current)
   })
const onChange = (pages)=>{
    getList(pages)
}
const delFn=(id)=>{
  ArticleDelApi({id
  }).then(res=>{
    console.log(res)
    if(res.errCode===0){
      message.success(res.message)
      setUpdate(update+1)
    }
    else{
      message.success(res.message)
    }
  })
}
  return (
    <div className='list_table'>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[
            <Button type='primary' onClick={()=>{navigate('/edit/'+item.id)}}>编辑</Button>, 
            <Button type='danger'  onClick={()=>{delFn(item.id)}}>删除</Button>]}
          >
            <Skeleton loading={false} >
              <List.Item.Meta
                title={<a href='#'>{item.title}</a>}
                description={item.subTitle}
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Pagination style={{height:'30px',width:'400px',position:"fixed",'textAlign':'center',bottom:80,left:'50%', transform: 'translate(-50%,-50%)'}} current={current} total={total} onChange={onChange} 
      />  
    </div>
  )
}
