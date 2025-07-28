import './Nav.css';
import { Photo } from './Photo/Photo';

export function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>Home</li>
                <li>Perfil</li>
                <li>Criar Post</li>
                <li>Configurações</li>
            </ul>
            <Photo></Photo>
        </nav>
    );
}