import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Хора от Народа
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Хора от Народа е патриотична организация, целяща да подкрепя, обединява и вдъхновява българите в цял свят. Чрез примера си ние искаме да покажем, че България може и ще има светло бъдеще, само когато всички застанем рамо до рамо и изградим родината, за която милеем и бленуваме!
                        </p>
                        <NavLink
                            href="https://www.horaotnaroda.bg"
                            target="_blank"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Научи повече...
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA