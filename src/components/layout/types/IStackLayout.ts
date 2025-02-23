export default interface IStackLayout {
  gap?: number;
  children: React.ReactNode;
  wrap?: 'wrap' | 'nowrap';
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}
