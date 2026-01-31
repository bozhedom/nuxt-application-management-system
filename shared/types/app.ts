export interface IApplication {
  id: number;
  number: string;
  status: StatusOption;
  verificationResult: VerificationResultOption;
  createdAt: string;
}

export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  color: ColorOption;
}

export type StatusOption =
  | 'active'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'completed'
  | 'cancelled'
  | 'draft';

export type VerificationResultOption =
  | 'in_progress'
  | 'passed'
  | 'failed'
  | 'requires_review'
  | 'on_hold'
  | 'expired';

export type ColorOption = 'red' | 'blue' | 'green' | 'yellow' | 'black';

export interface SaveApplicationPayload {
  id: number;
  products: Pick<IProduct, 'id' | 'name' | 'price'>[];
}

export interface SaveResponse {
  success: boolean;
}
