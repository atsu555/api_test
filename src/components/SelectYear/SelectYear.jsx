import './styles.css'; // スタイルをインポート

function SelectYear(props) {
  const { onChange } = props;

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    onChange(selectedYear);
  };

  return (
    <div className="select-container">
      <label htmlFor="year-select" className="select-label">
        年度:
      </label>
      <select
        className="select-dropdown"
        id="year-select"
        onChange={handleYearChange}
      >
        <option value="2012">2012年</option>
        <option value="2013">2013年</option>
        <option value="2014">2014年</option>
        <option value="2015">2015年</option>
        <option value="2016">2016年</option>
      </select>
    </div>
  );
}

export default SelectYear;
