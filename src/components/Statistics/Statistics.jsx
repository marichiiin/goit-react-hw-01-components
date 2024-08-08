import PropTypes from "prop-types";
import cssStats from './Statistics.module.css';

export const Statistics = ({title, stats}) => {

    const generateRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
    };

    return (
        <section className={cssStats.statistics}>
            {title && <h2 className={cssStats.title}>{title}</h2>}

            <ul className={cssStats.statList}>
                {stats.map((stat) => (
                    <li 
                        className={cssStats.item}
                        style={{backgroundColor: generateRandomColor()}}
                        key={stat.id}>
                        <span className={cssStats.label}>{stat.label}</span>
                        <span className={cssStats.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}