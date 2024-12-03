'use client'

import React, { useState } from 'react';
import  "bootstrap/dist/css/bootstrap.min.css"
import '../assets/styles/theme.css'
import '../assets/styles/fonts.css'
import '../assets/styles/unregister.css'

export default function Unregister() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();
    // TODO: send request to action="https://api.naroden.org/v1/public/users/unregister" method="post"
  };


  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Свържете се с нас!</p>

                    <form onSubmit={onSubmit} className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label">Телефон: +359883324570</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label">Поща: support@naroden.org</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <label className="form-label">Адрес: Плевен, жк Дружба 257</label>
                        </div>
                      </div>


                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
