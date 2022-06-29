export interface ICounterProps {
  id: string;
  count: number;
  hasBtns: boolean;
  handleIncrement: (id: string) => void;
  handleDecrement: (id: string) => void;
  handleRemove: (id: string) => void;
}
