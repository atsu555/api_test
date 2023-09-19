const API_ENDPOINT = 'https://opendata.resas-portal.go.jp/api/v1';
const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

// 都道府県一覧
export const fetchPrefectures = async () => {
  const response = await fetch(`${API_ENDPOINT}/prefectures`, {
    headers: {
      'X-API-KEY': API_KEY
    }
  });
  const data = await response.json();
  return data.result;
};

// 求人・求職者
export const fetchJobData = async (prefCode) => {
  const response = await fetch(
    `${API_ENDPOINT}/regionalEmploy/analysis/portfolio?prefCode=${prefCode}&year=2016&matter=1&class=1`,
    {
      headers: {
        'X-API-KEY': API_KEY
      }
    }
  );
  const data = await response.json();
  return data.result.data;
};
