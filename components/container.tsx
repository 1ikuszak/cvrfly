interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div
      className="
        max-w-[1400px]
        mx-auto
        w-full
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
      "
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
