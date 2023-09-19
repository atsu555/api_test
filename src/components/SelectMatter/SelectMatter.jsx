import './style.css';

function SelectMatter(props) {
  const { onChange } = props;

  const handleMatterChange = (e) => {
    const selectedMatter = e.target.value;
    onChange(selectedMatter);
  };

  return (
    <div className="select-container">
      <label htmlFor="gender-select" className="select-label">
        表示内容:
      </label>
      <select id="gender-select" onChange={handleMatterChange}>
        <option value="1" className="select-dropdown">
          有効求職者数（総数）
        </option>
        <option value="2" className="select-dropdown">
          有効求職者数（男性）
        </option>
        <option value="3" className="select-dropdown">
          有効求職者数（女性）
        </option>
      </select>
    </div>
  );
}

export default SelectMatter;
