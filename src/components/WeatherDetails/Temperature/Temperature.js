import classes from './Temperature.module.css';

const temperature = ({ degrees }) => (
    <div className={classes.TemperatureWrapper}>
        {Math.round(degrees)}<span className={classes.TemperatureSymbol}>°</span>
    </div>
);

export default temperature;