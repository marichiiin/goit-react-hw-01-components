
export const Statistics = ({statsId, label, percentage}) => {
    return (
        <section className="statistics">
        <h2 classNames="title">Upload stats</h2>

    <ul className="statList">
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
  </ul>
</section>
    )
}