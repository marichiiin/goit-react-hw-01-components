import PropTypes from "prop-types";
import cssTransaction from './Transactions.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={cssTransaction.transactionHistory}>
          <thead>
            <tr>
              <th className={cssTransaction.tableHeader}>Type</th>
              <th className={cssTransaction.tableHeader}>Amount</th>
              <th className={cssTransaction.tableHeader}>Currency</th>
            </tr>
          </thead>
            
          <tbody className={cssTransaction.tableBody}>
          {items.map((item) => (
              <tr key={item.id}>
                <td className={cssTransaction.tableData}>{item.type}</td>
                <td className={cssTransaction.tableData}>{item.amount}</td>
                <td className={cssTransaction.tableData}>{item.currency}</td>
            </tr>
            ))}
          </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
}

