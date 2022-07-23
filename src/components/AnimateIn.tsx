interface AnimateProps {
  children: JSX.Element;
}

const AnimateIn = (props: AnimateProps) => {
  return <div className={`origin-top animate-scalein`}>{props.children}</div>;
};

export { AnimateIn };
