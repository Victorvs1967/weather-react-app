import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';

const footer = props => (
    <footer className={classes.Footer}>
        <Logo colorScheme='dark' clicked={props.onClickHandler} />
        <div className={classes.Separator}></div>
    </footer>
);

export default footer;