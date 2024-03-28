"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const AllProductsCard = ({ allProducts }: any) => {
  return (
    <div className="gap-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
      {allProducts.map((item: any, index: any) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[360px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllProductsCard;
