import React from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import greek from "../../../assets/greek_salad.jpg";
import bruchetta from "../../../assets/bruchetta.svg";
import lemon_dessert from "../../../assets/lemon_dessert.jpg";
import delivery from "../../../assets/delevery.svg";

function Highlights() {
  return (
    <Card
      variant="secondary"
      py={"30rem"}
      px={{ lg: "30rem" }}
      className="space-x-0 px-10 lg:px-[15rem] lg:py-[6rem]"
      borderRadius="0rem"
    >
      <div className="flex flex-col md:flex-row sm:justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl mb-4 md:mb-0">
          This week's Specials
        </h2>
        <Button type="primary" className="w-full md:w-[200px] h-[60px]">
          Online Menu
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col h-full">
            <img
              src={item.img}
              alt={item.title}
              className="object-cover h-1/2"
            />
            <div className="bg-gray-200 p-3 h-1/2">
              <h3 className="text-l mb-2">{item.title}</h3>
              <p className="text-xl mb-4 text-[#EE9972]">{item.price}</p>
              <p className="mb-4">{item.description}</p>
              <div className="flex flex-row space-x-2">
                <p className="font-bold">Order a delivery</p>
                <img src={delivery} alt="Delivery icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

const items = [
  {
    img: greek,
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruchetta,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: lemon_dessert,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default Highlights;
