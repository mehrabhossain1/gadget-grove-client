const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-red-400 rounded-[64px] px-6 py-4 cursor-pointer">
      <p className="text-white font-bold">{children}</p>
    </div>
  );
};

export default Button;
