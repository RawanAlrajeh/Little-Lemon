import React from "react";
import Card from "../../../components/Card/Card";
import restauranfood from "../../../assets/restauranfood.jpg";
import Button from "../../../components/Button/Button";
import NavigationContext from "../../../context/navigation";
import { useContext } from "react";

function Hero() {
  
  const { navigate } = useContext(NavigationContext);

  const goToReservations = () => {
    navigate("/reservations");
  };

  return (
    <div className="mt-10">
      <Card
        py={"30rem"}
        px={{ lg: "30rem" }}
        borderRadius={"0rem"}
        className="flex flex-col lg:flex-row items-center  space-x-0 lg:space-x-20 px-16 lg:px-[15rem] lg:py-[6rem]"
      >
        <div className="text-center lg:text-left max-w-sm lg:max-w-md lg:w-80 space-y-5">
          <h1 className="text-3xl text-[#F4CE14] font-bold">Little Lemon</h1>
          <p className="text-xl text-[#fff] font-bold">KSA</p>
          <p className="text-l text-[#fff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            variant="primary"
            className="w-full lg:w-[200px] h-[60px] mt-10"
            onClick={goToReservations}
          >
            Reserve a Table
          </Button>
        </div>
        <div className="mt-10 lg:mt-0 max-w-xs lg:absolute lg:left-[50rem] lg:top-[9rem]">
          <img
            src={restauranfood}
            alt="Delicious restaurant food"
            className="w-full h-auto rounded-md lg:w-[375px] lg:h-[426px]"
          />
        </div>
      </Card>
    </div>
  );
}

export default Hero;
