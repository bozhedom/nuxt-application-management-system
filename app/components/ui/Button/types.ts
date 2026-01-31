export interface IButtonProps {
  title: string;
  disabled?: boolean;
  hierarchy: 'primary' | 'tertiary';
  size: 'small' | 'medium';
  onClick?: () => void;
}
