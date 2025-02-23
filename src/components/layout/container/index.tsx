interface IContainer {
  maxWidth?: number;
  padding?: number;
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({
  maxWidth,
  padding = 40,
  children,
}) => {
  return (
    <div
      style={{
        padding: `0 ${padding}px`,
        maxWidth: `${maxWidth && maxWidth + 'px'} ${!maxWidth && '100%'}`,
        width: '100%',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
