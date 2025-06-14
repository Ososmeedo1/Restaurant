import React from 'react'

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
              <div className="custom-icon">
                <span><i className='fas fa-user text-white fa-2x'></i></span>
              </div>
              <div className="ms-3 mt-3">
                <p className='text-success'>Hassan Youssef</p>
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
              <div className="custom-icon">
                <span><i className='fas fa-user text-white fa-2x'></i></span>
              </div>
              <div className="ms-3 mt-3">
                <p className='text-success'>Youssef Ayoub</p>
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
              <div className="custom-icon">
                <span><i className='fas fa-user text-white fa-2x'></i></span>
              </div>
              <div className="ms-3 mt-3">
                <p className='text-success'>Solyman Dawoud</p>
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
              <div className="custom-icon">
                <span><i className='fas fa-user text-white fa-2x'></i></span>
              </div>
              <div className="ms-3 mt-3">
                <p className='text-success'>Sara Moustafa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
