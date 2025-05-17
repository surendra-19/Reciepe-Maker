import Logo from '../../assets/Logo.webp';
import './Header.css';

const Header = () => {
  return (
    <>
        <header>
            <img src={Logo} alt='Logo' title='Logo' />
            <span>Reciepe Maker</span>
        </header>
    </>
  )
}

export default Header