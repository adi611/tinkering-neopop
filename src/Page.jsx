import { Button } from '@cred/neopop-web/lib/components';
import HeaderComp from './Header';
import ButtonComp from './Button';
import './Page.css';
import styles from './styles';

const Page = () => {
  return (
    <nav style={styles.navbg}>
      <HeaderComp id="header" />
      <ButtonComp style={styles.login} buttonType="Login" />
      <ButtonComp style={styles.signup} buttonType="Sign up" />
    </nav>
  );
};

export default Page;
