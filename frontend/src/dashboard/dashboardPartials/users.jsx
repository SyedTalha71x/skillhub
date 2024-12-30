/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useStateManage } from '../../context/StateContext';

const Users = () => {
  const [users, setusers] = useState('')
  const {BASE_URL} = useStateManage();

  useEffect(() => {
    const fetchUsers = async () =>{
      const token = localStorage.getItem('AuthToken')
      try{
        const response = await axios.get(`${BASE_URL}/get-all-users`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }) 
        setusers(response.data.message.getAllUsers)
      }
      catch(error){
        console.log(error);
      }
    }
    fetchUsers();
  }, [])
  
  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Joined At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (created_at) => new Date(created_at).toLocaleDateString()
    },
    // {
    //   title: "Actions",
    //   key: "actions",
    //   render: (_, record) => (
    //     <div className="flex gap-4">
    //       <EditOutlined
    //         className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg"
    //         onClick={() => handleEdit(record)}
    //       />
    //       <UploadOutlined
    //         className="text-red-500 hover:text-red-700 cursor-pointer text-lg"
    //         onClick={() => handleStatusCheck(record.id)}
    //       />
    //     </div>
    //   )
    // }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl bg-slate-100 rounded-md shadow-xl p-3 font-bold text-gray-800 mb-4">
        Users
      </h1>
      
      <Table
        columns={columns}
        dataSource={users}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} Users`
        }}
        scroll={{ x: 1000 }}
      />

    </div>
  )
}

export default Users