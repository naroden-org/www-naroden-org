import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import React, { useState } from "react"

export default function Registration() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    referral: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action

    const data= {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      referral: formData.referral
    }

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
    }).then((response) => response.json())
        .then((data) => {
          setFormData({
            message: ""
          })

          setFormSuccess(true)
          setFormSuccessMessage(data.submission_text)
        })
  }


  return (
    <>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Добре дошли!
              </h1>
              <p className='mt-3'>
                Blinder, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
              </p>

            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form className='space-y-5 font-medium' method="POST" action="https://api.naroden.org/v1/users"
                    onSubmit={submitForm}>
                <div>
                  <label>Име:</label>
                  <Input
                      aria-label='Име'
                      type='text'
                      required
                      className='mt-2 focus:border-indigo-600'
                      onChange={handleInput}
                      value={formData.firstName}
                      name="firstName"
                  />
                </div>
                <div>
                  <label>Фамилия:</label>
                  <Input
                      aria-label='Фамилия'
                      type='text'
                      required
                      className='mt-2 focus:border-indigo-600'
                      onChange={handleInput}
                      value={formData.lastName}
                      name="lastName"
                  />
                </div>
                <div>
                  <label>Поща:</label>
                  <Input
                      aria-label='Поща'
                      type='email'
                      className='mt-2 focus:border-indigo-600'
                      onChange={handleInput}
                      value={formData.email}
                      name="email"
                  />
                </div>
                <div>
                  <label>Телефон:</label>
                  <Input
                      aria-label='Телефон'
                      type='text'
                      className='mt-2 focus:border-indigo-600'
                      onChange={handleInput}
                      value={formData.phone}
                      name="phone"
                  />
                </div>
                <div>
                  <label>Парола:</label>
                  <Input
                      aria-label='Парола'
                      type='password'
                      required
                      className='mt-2 focus:border-indigo-600'
                      onChange={handleInput}
                      value={formData.password}
                      name="password"
                  />
                </div>
                <div>
                  <label>Потвърди парола:</label>
                  <Input
                      aria-label='Потвърди парола'
                      type='password'
                      required
                      className='mt-2 focus:border-indigo-600'
                      onChange={handleInput}
                      value={formData.password2}
                      name="password2"
                  />
                </div>

                <p className='mt-3'>
                  С натискането на бутона "Регистрирай се" вие се съгласявате с{" "}
                  <a href="/doc1.pdf"
                     className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                    общите условия
                  </a>
                  {" "}и нашата{" "}
                  <a href="/doc1.pdf"
                     className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                    политика за поверителност
                  </a>.
                </p>

                <div className='pt-1'>
                  <Button
                      className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring'>
                    Регистриай се
                  </Button>
                </div>

                <div>
                  <textarea name="message" onChange={handleInput} value={formData.message}></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
