import './styles.css'; // スタイルをインポート

function SelectYear(props) {
  const { onChange } = props;

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    onChange(selectedYear);
  };

  return (
    <div className="year-selection">
      <label htmlFor="year-select">年度:</label>
      <select id="year-select" onChange={handleYearChange}>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        {/* 他の年度も追加可能 */}
      </select>
    </div>
  );
}

export default SelectYear;
