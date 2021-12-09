import PropTypes from 'prop-types';
import css from './Statistic-section.module.css';

function StatisticSection ({title, stats}) {
  const element = stats.map(statsItem => {
    return (
      <li className={css.item} key = {statsItem.id}>
<span className={css.label}>{statsItem.label}</span>
<span className={css.percentage}>{statsItem.percentage}%</span>
</li>
    )
  })


  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>{element}</ul>
  </div>
  )
}


StatisticSection.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };

  export default StatisticSection;
