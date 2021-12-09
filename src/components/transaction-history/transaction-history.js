import PropTypes from "prop-types";
import css from './Transaction-history.module.css';


function TransactionHistory ({items}) {
    return (
        <table className={css.table}>
          <thead className={css.header}>
            <tr>
              <th className={css.item}>Type</th>
              <th className={css.item}>Amount</th>
              <th className={css.item}>Currency</th>
            </tr>
          </thead>
    
          <tbody className={css.body}>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id} className={css.list}>
                <td className={css.item}>{type}</td>
                <td className={css.item}>{amount}</td>
                <td className={css.item}>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );

}




TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}
export default TransactionHistory;