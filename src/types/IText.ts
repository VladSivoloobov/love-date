export default interface IText {
  text: string;
  textAlign?: 'left' | 'center' | 'right';
  textSize?: number;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}
