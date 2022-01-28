import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://i.ibb.co/xqx1xYK/pietro-de-grandi-T7-K4a-EPo-GGk-unsplash.jpg',
  },
  {
    url: 'https://i.ibb.co/T1VgtHr/thomas-ashlock-RAj-ND0-B3-HDw-unsplash.jpg',
  },
  {
    url: 'https://i.ibb.co/YWZYMS9/joseph-greve-TII6axq3eo4-unsplash.jpg',
  },
  {
    url: 'https://i.ibb.co/X4CRg0k/philipp-kammerer-6-Mxb-m-Z-Q8-E-unsplash.jpg',
  },
  {
    url: 'https://i.ibb.co/MCMRY7Z/felix-rostig-Um-V2wr-Vbq8-unsplash.jpg',
  },
];
const Hero = () => {
  return (
    <section className="flex-1 bg-white">
      <div className="grid grid-cols-2 gap-8 md:gap-0">
        {/* left */}
        <div className="col-span-2 md:col-span-1">
          {/* left container */}
          <div className="flex flex-col gap-8 md:gap-0 md:h-full">
            {/* left top */}
            <div className="bg-patterns py-4 md:py-6">
              <div className="md:max-w-xl w-full ml-auto h-full flex items-center">
                <img
                  className="h-40 w-40"
                  src="https://i.ibb.co/NFCgc3T/1.png"
                  alt="logo"
                />
              </div>
            </div>
            {/* left bottom */}
            <div className="flex-1 md:pt-10 md:pb-16">
              <div className="md:max-w-xl w-full ml-auto px-3 h-full flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl font-medium leading-7 mb-4">
                  Welcome to Adventure <br /> Magazine
                </h1>
                <p className="max-w-md text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  fugit sit explicabo ducimus non impedit, iure et doloribus
                  perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* rignt */}
        <div className="col-span-2 h-80 md:h-auto md:col-span-1 relative img-wrapper">
          <SimpleImageSlider
            width="100%"
            height="100%"
            images={images}
            showBullets={false}
            showNavs={true}
            autoPlay={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
