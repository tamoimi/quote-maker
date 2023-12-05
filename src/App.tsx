import { useQuery } from "react-query";
import "./App.css";
import { getQuotes } from "./api";
import { queryClient } from ".";

function App() {
  const { isLoading, data } = useQuery("/fetchQuotes", getQuotes, {
    enabled: false,
  });
  console.log("data", data);
  const fetchQuotesData = () => {
    // 요청을 수동으로 다시 로드하는 함수
    queryClient.fetchQuery("/fetchQuotes");
  };
  return (
    <div className="App">
      <button onClick={fetchQuotesData}>Load Data</button>
      {isLoading ? <p>Loading...</p> : <p>{data?.slip.advice}</p>}
    </div>
  );
}

export default App;
