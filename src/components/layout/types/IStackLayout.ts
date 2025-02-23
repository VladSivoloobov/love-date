export default interface IStackLayout {
  gap?: number;
  children: React.ReactNode;
  wrap?: 'wrap' | 'nowrap';
  attributes?: React.HTMLAttributes<HTMLDivElement>;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'space-between';
}
