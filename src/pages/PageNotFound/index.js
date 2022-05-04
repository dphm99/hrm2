import React, { Component } from 'react'
import './PageNotFound.css'
import {Helmet} from "react-helmet";
export class PageNotFound extends Component {
    render() {
        return ( 
               <section className="four-zero-four-section version-1">
               <Helmet>
                 <title>Error</title>
               </Helmet>
        {/*======= Stars =======*/}
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex mb-5">
                <h1 className="first">4</h1>
                {/*======= Planet =======*/}
                <div className="planet-div">
                  <div className="planet-inner-section">
                    <div className="hole-1" />
                    <div className="hole-2" />
                    <div className="hole-3" />
                    <div className="hole-4" />
                    <div className="hole-5" />
                  </div>
                </div>
                <h1 className="second">4</h1>
              </div>
              <h2>Không tìm thấy trang</h2>
              <p className="pt-10">
                Chúng tôi không tìm thấy trang ...
              </p>
              <a href="/" className="mt-30">Quay lại trang chủ</a>
            </div>
          </div>
        </div>
        <div className="small-planet-1" />
        <div className="small-planet-2" />
        <div className="small-planet-3" /> 
      </section> 
        )
    }
}

export default PageNotFound
