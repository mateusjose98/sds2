import './styles.css';
import { ReactComponent as YouTubeIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a segunda edição da Semana Dev. Superior.
        <div className="footer-icons">
            <a href="#" target="_new">
                <YouTubeIcon />
            </a>
            <a href="#" target="_new">
                <LinkedinIcon />
            </a>
            <a href="#" target="_new">
                <InstagramIcon />
            </a>
        </div>
        
        </footer>
    )
}


export default Footer;