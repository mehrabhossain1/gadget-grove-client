import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <Spinner
      className="h-screen w-full mx-auto flex items-center justify-start pt-10"
      label="Loading"
      color="success"
      labelColor="success"
    />
  );
};

export default Loading;
