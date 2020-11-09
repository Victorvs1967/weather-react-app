import classes from './Icon.module.css';

const icon = props => (
    <img 
        src={`../../assets/images/${props.type}.svg`}
        alt={props.type}
        className={classes.Icon}
    />
);

export default icon;