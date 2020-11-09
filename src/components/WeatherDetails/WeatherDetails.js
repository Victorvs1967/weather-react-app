import classes from './WeatherDetails.module.css';

import Icon from '../../elements/Icon/Icon';
import Temperature from './Temperature/Temperature';
import Description from './Description/Description';
import Date from './Date/Date';

const weatherDetails = ({ data }) => (
    <div className={classes.WeatherDetaileWraper}>
        <div className={classes.WeatherIconWrapper}>
            <Icon type={data.description} />
        </div>
        <div className={classes.WeatherDataWraper}>
            <Temperature degrees={data.temterature} />
            <Description type={data.description} />
            <Date />
        </div>
    </div>
);

export default weatherDetails;