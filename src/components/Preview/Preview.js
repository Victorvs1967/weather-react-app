import classes from './Preview.module.css';

const preview = props => (
    <img
        src={require('../../assets/images/Preview.svg')}
        alt='Weather App Icon'
        className={classes.Preview} 
    />
);

export default preview;