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
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={fetchQuotesData}
      >
        Check today's quote
      </button>
      {isLoading ? <p>Loading...</p> : <p>{data?.slip.advice}</p>}
    </div>
  );
}

export default App;
