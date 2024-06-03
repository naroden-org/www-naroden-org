export const metadata = {
  title: 'Народен - регистрация',
  description: 'Народен - приложението на народа!',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Добре дошли! Очаквайте скоро новини от нас!</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="firstName">Име <span
                      className="text-red-600">*</span></label>
                  <input id="firstName" type="text" className="form-input w-full text-gray-800"
                         placeholder="Въведете вашето име" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="lastName">Фамилия <span
                      className="text-red-600">*</span></label>
                  <input id="lastName" type="text" className="form-input w-full text-gray-800"
                         placeholder="Въведете вашата фамилия" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Поща <span
                      className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800"
                         placeholder="Въведете вашата поща" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="phone">Телефон <span
                      className="text-red-600">*</span></label>
                  <input id="phone" type="email" className="form-input w-full text-gray-800"
                         placeholder="Въведете вашия телефон" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Парола <span
                      className="text-red-600">*</span></label>
                  <input id="password" type="password" className="form-input w-full text-gray-800"
                         placeholder="Въведете вашата парола" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password2">Паролата отново <span
                        className="text-red-600">*</span></label>
                  <input id="password2" type="password" className="form-input w-full text-gray-800"
                         placeholder="Повторете вашата парола" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="referral">Референция</label>
                  <input id="referral" type="text" className="form-input w-full text-gray-800"
                         placeholder="Въведете референция, ако има"/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Регистрирай се!</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                Регистрирайки се, вие се съгласявате с <a className="underline" href="#0">общите условия</a> и нашата <a
                  className="underline" href="#0">политика за поверителност</a>.
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
