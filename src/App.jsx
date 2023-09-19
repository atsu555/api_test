import React, { useState, useEffect } from 'react';
import SelectPrefecture from './components/SelectPrefecture/SelectPrefecture';
import './App.css';
import { fetchPrefectures, fetchJobData } from './api';
import SelectYear from './components/SelectYear/SelectYear';
import SelectMatter from './components/SelectMatter/SelectMatter';

function App() {
  const [prefectures, setPrefectures] = useState([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2014');
  const [selectedMatter, setSelectedMatter] = useState('1');
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPrefectures();
      setPrefectures(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedPrefecture) {
      const fetchData = async () => {
        const data = await fetchJobData(
          selectedPrefecture,
          selectedYear,
          selectedMatter
        );
        setJobData(data);
        console.log(data);
      };
      fetchData();
    }
  }, [selectedPrefecture, selectedYear, selectedMatter]);

  return (
    <div className="App">
      <h1>求人・求職者データ表示</h1>
      <SelectPrefecture
        prefectures={prefectures}
        onChange={(prefCode) => setSelectedPrefecture(prefCode)}
      />
      <SelectYear onChange={(year) => setSelectedYear(year)} />
      <SelectMatter onChange={(matter) => setSelectedMatter(matter)} />
      <div>
        <div className="job">
          <table>
            <tbody>
              <tr>
                <th>職業分類名</th>
                <th>求人・求職者数</th>
              </tr>
              {jobData.map((job) => (
                <tr key={job.broadCode}>
                  <td>{job.broadName}</td>
                  <td>{job.value} 人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
