import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MonthlyTheme = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id='monthlytheme' className="text-white max-w-screen-xl mx-auto conatiner py-11">
            <h2 className="text-2xl md:text-4xl ml-5 py-4 font-semibold">Monthly <span className="text-blue">Theme</span></h2>
            <Slider {...settings}>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>
            </Slider>

        </div>
    );
}

export default MonthlyTheme