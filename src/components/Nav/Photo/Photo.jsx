import './Photo.css';
import NologinImg from '../../../assets/Nologin.png';
import { styles } from '../../../styles/img'

export function Photo() {
    return (
        <div className="photo">
            <img style={styles.ImgDefault} src={NologinImg} alt="" />
            
        </div>
    );
};