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
            breadItem={breadcrumItem}
            />       
            <Footer />
        </div>
    )
}

export default JobPosition