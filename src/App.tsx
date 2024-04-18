import { useQuery } from "react-query";
import { queryClient } from ".";
import "./App.css";
import { getQuotes } from "./api";
import Quote from "./components/Quote";

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
    <div className="flex flex-col gap-5 p-4 text-center">
      <p className="text-2xl">Today's random quote</p>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className=" block text-white bg-teal-700 hover:bg-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="button"
        onClick={fetchQuotesData}
      >
        Check today's random quote
      </button>
      <Quote data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
