import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
