interface AnimatedProps {
  children: React.ReactNode;
  href: string;
}

const AnimatedLink = ({ href, children }: AnimatedProps) => {
  return (
    <a
      className="relative overflow-hidden before:absolute before:bottom-0
      before:left-0 before:h-0.5 before:w-0 before:translate-x-10 before:opacity-0 before:transition-all 
      before:hover:w-full before:hover:translate-x-0 before:hover:bg-fuchsia-900 before:hover:opacity-100 
      dark:before:bg-orange-300"
      href={href}
    >
      {children}
    </a>
  );
};

export { AnimatedLink };
