interface ICard {
  image: string;
  title: string;
  description: string;
  price: number;
  // count: number;
  // rate: number;
  isDeleted?: boolean;
  handelPress?: () => void;
  handelDlete?: () => void;
}
