import Image from 'next/image'
import freshbooks from '../../../public/logos/historical-park.png'
import sendgrid from '../../../public/logos/krasiva-balgaria.png'
import layers from '../../../public/logos/svoboden-glas.png'
import adobe from '../../../public/logos/velichie.png'

const logos = [
    {
        src: freshbooks,
        alt: "freshbooks"
    },
    {
        src: sendgrid,
        alt: "sendgrid"
    },
    {
        src: layers,
        alt: "layers"
    },
    {
        src: adobe,
        alt: "adobe"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                С ЛЮБЕЗНОТО СЪДЕЙСТВИЕ НА
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid