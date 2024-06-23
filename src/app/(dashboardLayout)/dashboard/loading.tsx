import { Spinner } from "@nextui-org/react";
import React from "react";

const LoadingDashboard = () => {
  return (
    <Spinner
      className="h-screen w-full mx-auto flex items-center justify-start pt-10"
      label="Dashboard Content Loading"
      color="success"
      labelColor="success"
    />
  );
};

export default LoadingDashboard;
