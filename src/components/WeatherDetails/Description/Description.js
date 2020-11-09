import classes from './Description.module.css';

const description = props => (
    <div className={classes.DescriptionWrapper}>
        {props.type}
    </div>
);

export default description;