import React from 'react'
import styles from './Reviews.module.css'
import person1 from '../../Assets/person1.jpg'
import person2 from '../../Assets/person2.jpg'
import person3 from '../../Assets/person3.jpg'
import person4 from '../../Assets/person4.jpg'

export default function Reviews() {
  return <>
    <div className="reviews-section container">
      <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <div class="card h-100 shadow">
            <div class="card-body">
              <div className="p-4">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto, quibusdam facere in temporibus non.</p>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center">
              <img src={person1} className='img-fluid rounded-circle mx-3 shadow' alt="" />
              <div className="card-title">
                <p className='text-success'>John Mike</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="card h-100 shadow">
            <div class="card-body">
              <div className="p-4">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto, quibusdam facere in temporibus non.</p>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center">
              <img src={person4} className='img-fluid rounded-circle mx-3 shadow' alt="" />
              <div className="card-title">
                <p className='text-success'>Jack Wilson</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="card h-100 shadow">
            <div class="card-body">
              <div className="p-4">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto, quibusdam facere in temporibus non.</p>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center">
              <img src={person4} className='img-fluid rounded-circle mx-3 shadow' alt="" />
              <div className="card-title">
                <p className='text-success'>Jack Wilson</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="card h-100 shadow">
            <div class="card-body">
              <div className="p-4">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto, quibusdam facere in temporibus non.</p>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center">
              <img src={person1} className='img-fluid rounded-circle mx-3 shadow' alt="" />
              <div className="card-title">
                <p className='text-success'>John Mike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
