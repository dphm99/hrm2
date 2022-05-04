import React from 'react'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb"
function JobPosition() {
    const breadcrumItem=[
        {
            href:"/",
            title:"Trang chủ",
            isActive:false
        },
       
        {
            href:"/vi-tri-tuyen-dung",
            title:"Vị trí tuyển dụng",
            isActive:false
        },
       
        {
            href:"/",
            title:"Quy trình tuyển dụng",
            isActive:true
        },
       
    ]
    return (
        <div>  
            <Breadcrumbs 
            separator=">" 
            breadItem={breadcrumItem}
            />       
            <div className="container"
            style={{height:"500px",backgroundColor:'#ccc',margin:"30px auto"}}
            >
            </div>
            <Footer />
        </div>
    )
}

export default JobPosition