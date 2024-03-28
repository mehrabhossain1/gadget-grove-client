"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const AllProductsCard = ({ allProducts }: any) => {
  console.log(allProducts);

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
            <Link href={`/products/${item._id}`}>
              <b>{item.title}</b>
            </Link>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllProductsCard;
