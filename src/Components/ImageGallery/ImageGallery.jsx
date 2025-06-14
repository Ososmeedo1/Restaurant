import React from 'react'
import styles from './ImageGallery.module.css'
import Gallery1 from '../../Assets/gallery1.jpg'
import Gallery2 from '../../Assets/gallery2.jpg'
import Gallery3 from '../../Assets/gallery3.jpg'
import Gallery4 from '../../Assets/gallery4.jpg'
import Gallery5 from './../../Assets/edited3.jpg'

export default function ImageGallery() {
  return <>
    <div className="container py-5">
      <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold'>Image Gallery</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="my-3">
            <img src={Gallery1} className='img-fluid' alt="" />
          </div>
          <div className="my-3">
            <img src={Gallery2} className='img-fluid' alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="my-3">
            <img src={Gallery3} className='img-fluid' alt="" />
          </div>
          <div className="my-3">
            <img src={Gallery4} className='img-fluid' alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="my-3">
            <img src={Gallery5} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </div>
  </>
}
