interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  type: string;
  label?: string;
  error?: string;
}

interface ButtonWithLoaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  initialText: string;
  loadingText: string;
}

interface SelectWithIconProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon: React.ReactNode;
  label?: string;
  error?: string;
  defaultValue?: string;
  options: {
    label: string;
    value: string;
  }[];
}

interface IUser {
  id: string;
  name: string;
  email: string;
  role: "reader" | "creator";
  username: string;
  avatar?: string;
  gender?: string;
  phone?: string;
  address?: string;
  earnings: number;
  totalComics: number;
  savedComics: string[];
  purchasedComics: string[];
  isVerified: boolean;
  preferences: {
    sendPromotionalEmails: boolean;
  };
  createdAt: string;
  updatedAt: string;
}
