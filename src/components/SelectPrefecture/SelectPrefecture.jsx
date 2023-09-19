import React, { useEffect, useState } from 'react';
import './styles.css'; // スタイルをインポート
import { fetchPrefectures } from '../../api';

function SelectPrefecture(props) {
  const { prefectures, onChange } = props;

  const handlePrefectureChange = (event) => {
    const selectedPrefCode = event.target.value;
    onChange(selectedPrefCode);
  };

  return (
    <div className="select-container">
      <label className="select-label" htmlFor="prefecture-select">
        都道府県:
      </label>
      <select
        id="prefecture-select"
        className="select-dropdown"
        onChange={handlePrefectureChange}
      >
        <option value="">都道府県を選択してください</option>
        {prefectures.map((pref) => (
          <option key={pref.prefCode} value={pref.prefCode}>
            {pref.prefName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectPrefecture;
