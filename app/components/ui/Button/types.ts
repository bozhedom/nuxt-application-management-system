export interface IButtonProps {
  title?: string;
  disabled?: boolean;
  hierarchy: 'primary' | 'tertiary' | 'secondary';
  size: 'small' | 'medium' ;
  onClick?: () => void;
}
