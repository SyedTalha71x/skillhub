/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { message, Modal, Select, Table } from "antd";
import axios from "axios";
import { useStateManage } from "../../../context/StateContext";
import { EditOutlined , UploadOutlined} from "@ant-design/icons";

const Courses = () => {
  const { BASE_URL } = useStateManage();
  const [courses, setCourses] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setstatus] = useState('')
  const [IsStatusModalVisible, setIsStatusModalVisible] = useState(false)

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-courses`);
      const formattedCourses = response.data.message.getAllCourses.map((course) => ({
        ...course,
        key: course.id,
        isPublished: course.isPublished ?? true
      }));
      setCourses(formattedCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [BASE_URL]);

  const handleEdit = (record) => {
    console.log("Edit course:", record);
  };
  
  const handleStatusCheck = async (id) => {
    setSelectedCourse(courses.find(course => course.id === id));
    setIsStatusModalVisible(true);
  };

  const handleStatusUpdate = async () =>{
    const token = localStorage.getItem('AuthToken')
    try{
      const response = await axios.post(`${BASE_URL}/update-course-status/${selectedCourse.id}`, {
        newStatus: status
      }, {headers:{
        Authorization: `Bearer ${token}`
      }})
      message.success('Status has been changed')
      setstatus(response.data.message.status)
      setIsStatusModalVisible(false);
    }
    catch(error){
      console.log(error);
      message.error('Failed to update the Status')
    }
  }

  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title)
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [...new Set(courses.map(course => course.category))].map(category => ({
        text: category,
        value: category
      })),
      onFilter: (value, record) => record.category === value
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => `$${price.toFixed(2)}`
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (duration) => `${duration} hours`,
      sorter: (a, b) => a.duration - b.duration
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img
          src={thumbnail}
          alt="Course thumbnail"
          style={{ width: "50px", height: "50px",  borderRadius: "50%", objectFit: "cover" }}
        />
      )
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-4">
          <EditOutlined
            className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg"
            onClick={() => handleEdit(record)}
          />
          <UploadOutlined
            className="text-red-500 hover:text-red-700 cursor-pointer text-lg"
            onClick={() => handleStatusCheck(record.id)}
          />
        </div>
      )
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl bg-slate-100 rounded-md shadow-xl p-3 font-bold text-gray-800 mb-4">
        Courses Management
      </h1>
      
      <Table
        columns={columns}
        dataSource={courses}
        loading={loading}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} courses`
        }}
        scroll={{ x: 1000 }}
      />

       <Modal
        title="Update Course Status"
        open={IsStatusModalVisible}
        onCancel={() => setIsStatusModalVisible(false)}
        onOk={handleStatusUpdate}
        okText="Update"
        cancelText="Cancel"
      >
        <p className="mb-4">Current Status: <span className="font-bold">{selectedCourse?.status}</span></p>
        <Select
          value={status}
          onChange={setstatus}
          style={{ width: '100%' }}
          placeholder="Select new status"
        >
          <Select.Option value="Active">Active</Select.Option>
          <Select.Option value="Inactive">Inactive</Select.Option>
        </Select>
      </Modal>
    </div>
  );
};

export default Courses;