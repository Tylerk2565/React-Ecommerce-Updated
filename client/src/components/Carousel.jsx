import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://www.chicagomotorcars.com/imagetag/11522/main/f/Used-2023-Ferrari-SF90-Stradale-Huge-683k+-MSRP!-Only-1K-Miles!-Rare-Azzurro-Dino-Paint!-Loaded-W-Carbon-1726077270.jpg",
    "https://www.chicagomotorcars.com/imagetag/10336/main/f/Used-2022-McLaren-765LT-Spider-Huge-MSRP!-1-of-1-MSO-Celerium-Blue!-Anrky-Wheels!-Only-1600-Miles!-1713903462.jpg",
    "https://www.chicagomotorcars.com/imagetag/11166/main/f/Used-2023-Ferrari-SF90-Stradale-Only-1K-Miles!-Full-PPF!-RARE-Signal-Green!-Carbon-Fiber-Interior-Package!-1697234988.jpg",
    "https://www.chicagomotorcars.com/imagetag/11775/main/f/Used-2024-Porsche-911-GT3-RS-Weissach-Package!-Delivery-Miles!-PCCB!-Front-Lift!-BOSE!-Full-PPF!-1723922275.jpg",
    "https://www.chicagomotorcars.com/imagetag/11689/main/f/Used-2017-Audi-R8-Quattro-V10-Plus-AMS-Alpha-12-Twin-Turbo-Package!-Full-PPF!-Dynamite-Red!-1714776095.jpg",
    "https://www.chicagomotorcars.com/imagetag/11754/main/l/Used-1998-Nissan-Skyline-R34-GTT-Stunning-Build!-RHD!-Full-GT-R-Body-Kit!-Carbon-Fiber-Hood!-1718116773.jpg",
    "https://www.chicagomotorcars.com/imagetag/12005/main/l/Used-2017-McLaren-570GT-Stunning-Spec!-Carbon-Ceramics!-Sport-Exhaust!-Carbon-Interior-Trim!-1728077240.jpg",
    "https://www.chicagomotorcars.com/imagetag/11563/main/l/Used-2021-Lamborghini-Urus-SUV-RARE-Viola-Pasifae!-Akrapovic-Titanium-Exhaust!-MSRP-282K+!-1716999715.jpg",
    "https://www.chicagomotorcars.com/imagetag/12111/main/l/Used-2023-Lamborghini-Huracan-STO-HUGE-435k+-Sticker!-Full-Body-PPF!-Sport-Seats!-Carbon-Fiber!-Loaded!-1731354649.jpg",
    "https://www.chicagomotorcars.com/imagetag/12116/main/l/Used-2024-Lamborghini-Revuelto-Viola-Pasifae!-760-Miles!-Full-PPF!-727K+-Sticker!-Tons-of-Carbon-Fiber!-1731367674.jpg",
    "https://www.chicagomotorcars.com/imagetag/12006/main/l/Used-2025-Land-Rover-Range-Rover-P530-LWB-Full-Widebody-Kit!-Forgiato-Wheels!-Meridian-Sound!-3rd-Row-Seating!-1729176222.jpg",
    "https://www.chicagomotorcars.com/imagetag/12105/main/l/Used-2021-McLaren-765LT-Rare-Nardo-Orange-Paint!-Vossen-HF-2-Wheels!-MSO-Carbon-Door-Sills!-Loaded!-1730846683.jpg"
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-90% h-100 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
