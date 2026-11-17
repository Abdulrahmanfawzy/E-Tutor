export type SavedPaymentCardProps = {
  type: "visa" | "mastercard";
  number: string;
  expiry: string;
  holder: string;
  selected: boolean;
  onSelect: () => void;
};

export type PaymentMethodType = "visa" | "mastercard" | "paypal" | "new";
