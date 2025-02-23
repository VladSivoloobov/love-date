interface IContainer {
  maxWidth?: number;
  padding?: number;
  verticalPadding?: number;
  children: React.ReactNode;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

const Container: React.FC<
  IContainer & React.HTMLAttributes<HTMLDivElement>
> = ({ padding = 40, verticalPadding = 0, children, ...attributes }) => {
  return (
    <div
      {...attributes}
      style={{
        padding: `${verticalPadding}px ${padding}px`,
        width: '100%',
        margin: '0 auto',
        ...attributes.style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
