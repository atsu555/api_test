import './styles.css'; // スタイルをインポート

function SelectYear(props) {
  const { onChange } = props;

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    onChange(selectedYear);
  };

  return (
    <div className="select-container">
      <label htmlFor="year-select" className="select-label">年度:</label>
      <select id="select-dropdown" onChange={handleYearChange}>
        <option value="2012" className="select-dropdown">2012</option>
        <option value="2013" className="select-dropdown">2013</option>
        <option value="2014" className="select-dropdown">2014</option>
        <option value="2015" className="select-dropdown">2015</option>
        <option value="2016" className="select-dropdown">2016</option>
      </select>
    </div>
  );
}

export default SelectYear;
