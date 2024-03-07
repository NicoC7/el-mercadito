import Image from 'next/image';

const list = [
    {
      name: 'Authentic Colombian coffee',
      desc: 'We offer a variety of brewing methods, from traditional Chemex to the unique Colombian pour-over technique, allowing you to savour the full spectrum of flavours in our beans.',
      image:
        'https://coffeehero.com.au/cdn/shop/articles/feef2653e8fee281501fe072610641a2_2048x2048.jpg?v=16243234410',
    },
    {
      name: 'Homemade Colombian treats',
      desc: 'Alongside our coffee, we serve a selection of delicious homemade Colombian pastries and snacks, made fresh daily using traditional recipes.',
      image:
        'https://www.mycolombianrecipes.com/wp-content/uploads/2014/01/Empanadas-041.jpg',
    },
    {
      name: 'A taste of Colombian culture',
      desc: 'Immerse yourself in the warmth and spirit of Colombia through our music, artwork, and friendly conversations with our team.',
      image:
        'https://static1.squarespace.com/static/5f18420f3734db1079654907/5f27d39e885c1c045aafc692/642aa2ba28138f4ed55ea1ff/1700744339921/Screenshot+2023-05-09+at+18.02.01.png?format=1500w',
    },
  ]

export default function About() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-white py-24 sm:py-60">
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl lg:mx-0">
                
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Bienvenidos a El Mercadito, your taste of Colombia in Leamington!</h2>
                
                <p className="mt-6 text-lg leading-8 text-black-300 mt-20">
                We are a family-owned Colombian coffee shop, bringing the vibrant flavours and warm hospitality of our homeland to Leamington. Our journey began with Tatiana, who emigrated to Canada from Colombia with a dream of sharing their love for exceptional coffee and Colombian culture.</p>


                <div className="mx-auto max-w-4xl lg:mx-0 justify-items-center">
                    <Image
                    src="data:image/jpeg;base64,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"
                    width={500}
                    height={500}
                    className="rounded-full mt-8 mb-8 mx-auto"
                    alt="El mercadito"
                    />
                </div>

                <p className="mt-6 text-lg leading-8 text-black-300 mt-20">
                At <span className='font-bold'>El Mercadito</span>, we are passionate about serving you the highest quality Colombian coffee, ethically sourced directly from small, family-owned farms in the Colombian Andes. We believe in sustainable practices and fair trade, ensuring that our farmers receive a fair price for their hard work and dedication.</p> 

                <div className="mx-auto max-w-4xl lg:mx-0 justify-items-center">
                    <Image
                    src="data:image/jpeg;base64,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"
                    width={500}
                    height={500}
                    className="rounded-full mt-8 mb-8 mx-auto"
                    alt="El mercadito"
                    />
                </div>  

                <p className="mt-6 text-lg leading-8 text-black-300 mt-20">
                Beyond the coffee, we strive to create a welcoming space that feels like home. Whether you're looking for a quick pick-me-up, a place to relax with friends, or a taste of Colombian culture, we invite you to step into our warm and inviting atmosphere.</p>   
                </div>

                <h4 className="text-4xl font-bold tracking-tight text-black sm:text-4xl mt-20">Here, you can experience:</h4>

                <ul className="divide-y divide-black-200">
                {list.map((item) => (
                    <li key={item.desc} className="py-8 flex p-4">
                    <img className="h-20 w-20 rounded-full" src={item.image} alt="" />
                    <div className="ml-3">
                        <p className="text-sm font-bold text-black-300">{item.name}</p>
                        <p className="text-sm text-black-300">{item.desc}</p>
                    </div>
                    </li>
                ))}
                </ul>
               
                <p className="mt-6 text-lg leading-8 text-black-300 mt-8">
                We are more than just a coffee shop; we are a community hub where you can connect with others, share stories, and experience a piece of Colombia right here in Leamington.</p>

            </div>
            </div>
        </div>
      )
}