const API_ENDPOINT = "https://opendata.resas-portal.go.jp/api/v1";
const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

// 都道府県一覧
export const fetchPrefectures = async () => {
  const response = await fetch(`${API_ENDPOINT}/prefectures`, {
    headers: {
      "X-API-KEY": API_KEY
    }
  });
  const data = await response.json();
  return data.result;
};

export const fetchJobData = async (prefectureCode) => {
  const response = await fetch(`${API_ENDPOINT}/job_data?prefectureCode=${prefectureCode}`, {
    headers: {
      "X-API-KEY": API_KEY
    }
  });
  const data = await response.json();
  return data.result;
};
