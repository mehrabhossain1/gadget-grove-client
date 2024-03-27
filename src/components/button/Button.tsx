const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#282828] rounded-[64px] px-6 py-4 cursor-pointer">
      <p className="text-white font-bold">{children}</p>
    </div>
  );
};

export default Button;
