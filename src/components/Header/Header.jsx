import './Header.css';
import { Title } from '../Title';

export function Header({ children }) {
  return (
    <header className="header">
      {children}
    </header>
  );
}
