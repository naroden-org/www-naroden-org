'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import  "bootstrap/dist/css/bootstrap.min.css"
import '../assets/styles/theme.css'
import '../assets/styles/fonts.css'
import '../assets/styles/unregister.css'

export default function activateAccount() {
  const searchParams = useSearchParams();
  let code = searchParams.get("code");
  if (!code) {
    code = "";
  }
  let email = searchParams.get("email");
  if (!email) {
    email = "";
  }

  const [inputCode, setInputCodeValue] = useState(code);
  const [inputEmail, setInputEmailValue] = useState(email);

  const [successFormMessage, setSuccessFormMessageValue] = useState('');
  const [errorFormMessage, setErrorFormMessageValue] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.name !== "activate-account") {
      return;
    }

    const data = {
      code: inputCode,
      email: inputEmail
    };

    const response = await fetch('https://api.naroden.org/public/v1/users/activate-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      setSuccessFormMessageValue("Успешно активирахте своя акаунт!");
      setErrorFormMessageValue("");
    } else {
      setSuccessFormMessageValue("");
      if (result.code === "4003") {
        setErrorFormMessageValue("Грешка при активацията. Не съществува акаунт с тази поща.");
      } else if (result.code === "4005") {
        setErrorFormMessageValue("Грешка при активацията. Въведеният код е грешен.");
      } else if (result.code === "4006") {
        setErrorFormMessageValue("Грешка при активацията. Въведеният код е изтекъл.");
      } else if (result.code === "4007") {
        setErrorFormMessageValue("Грешка при активацията. Няма издаден код за посочената поща.");
      } else {
        setErrorFormMessageValue("Възникна технически проблем при активацията на вашия акаунт. Опитайте по-късно или се свържете с администратор.");
      }
    }
  };

  const resendCode = async () => {
    const data = {
      email: inputEmail
    };

    const response = await fetch('https://api.naroden.org/public/v1/users/issue-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccessFormMessageValue("Успешно поискахте нов код. Моля проверете пощата си!");
      setErrorFormMessageValue("");
    } else {
      setSuccessFormMessageValue("");
      if (result.code === "4003") {
        setErrorFormMessageValue("Не съществува акаунт с тази поща.");
      } else {
        setErrorFormMessageValue("Възникна технически проблем при изпращането на нов код. Опитайте по-късно или се свържете с администратор.");
      }
    }
  }

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Активирайте своя акаунт!</p>

                    <form onSubmit={onSubmit} className="mx-1 mx-md-4">
                      <div className="mb-4">
                        <label htmlFor="disabledTextInput" className="form-label">Поща</label>
                        <input
                            className="form-control"
                            placeholder="Въведете вашата поща"
                            type="text"
                            value={inputEmail}
                            onChange={e => {
                              setInputEmailValue(e.currentTarget.value);
                            }}
                        />

                      </div>
                      <div className="mb-4">
                        <label htmlFor="disabledTextInput" className="form-label">Код</label>
                        <input
                            className="form-control"
                            placeholder="Въведете вашия код"
                            type="text"
                            value={inputCode}
                            onChange={e => {
                              setInputCodeValue(e.currentTarget.value);
                            }}
                        />
                      </div>
                      <div className="mb-4">
                        <button name="activate-account" className="btn btn-primary">Активирай</button>
                        <button name="resend-rode" onClick={resendCode} className="btn btn-primary float-end">Изпрати нов код</button>
                      </div>
                      <div className="mb-4">
                        <div className="form-text text-success fw-bold">{successFormMessage}</div>
                        <div className="form-text text-danger fw-bold">{errorFormMessage}</div>
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
