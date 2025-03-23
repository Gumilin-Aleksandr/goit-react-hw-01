import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.tableRow}>{item.type}</td>
            <td className={s.tableRow}>{item.amount}</td>
            <td className={s.tableRow}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
