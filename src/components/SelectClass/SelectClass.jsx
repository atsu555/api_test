import './styles.css'; // スタイルをインポート

function SelectClass(props) {
  const { onChange, selectedClass } = props;

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    onChange(selectedClass);
  };

  return (
    <div className="class-selection">
      <span className="class-title">表示分類</span>
      <label>
        <input
          type="radio"
          name="class"
          value="1"
          checked={selectedClass === '1'}
          onChange={handleClassChange}
        />
        職業大分類で見る
      </label>
      <label>
        <input
          type="radio"
          name="class"
          value="2"
          checked={selectedClass === '2'}
          onChange={handleClassChange}
        />
        職業中分類で見る
      </label>
    </div>
  );
}

export default SelectClass;
