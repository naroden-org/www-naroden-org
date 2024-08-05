import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import React from "react";

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Включи се сега към народната мрежа!
                </h2>
                <p className="mt-3 text-gray-600">
                    За допълнителна информация може да се свържете с нас на{" "}
                    <a
                        href='mailto:support@naroden.org'
                        target='_blank'
                        rel='noreferrer'
                        className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                        support@naroden.org
                    </a>
                </p>
                <NavLink
                    href="/registration"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Регистрирай се!
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA