import { useQuery } from "react-query";
import "./App.css";
import { getQuotes } from "./api";
import { queryClient } from ".";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className=" block text-white bg-teal-700 hover:bg-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="button"
        onClick={fetchQuotesData}
        // onClick={toggleModal}
      >
        Check random quote
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="font-normal text-gray-700 dark:text-gray-400">{data?.slip.advice}</p>
        </div>

        // <>
        //   {/* <!-- Main modal --> */}
        //   <div
        //     id="default-modal"
        //     // tabIndex="-1"
        //     tabIndex={-1}
        //     aria-hidden="true"
        //     className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        //   >
        //     <div className="relative w-full max-w-2xl max-h-full p-4">
        //       {/* <!-- Modal content --> */}
        //       <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        //         {/* <!-- Modal header --> */}
        //         <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
        //           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
        //           <button
        //             type="button"
        //             className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
        //             data-modal-hide="default-modal"
        //           >
        //             <svg
        //               className="w-3 h-3"
        //               aria-hidden="true"
        //               xmlns="http://www.w3.org/2000/svg"
        //               fill="none"
        //               viewBox="0 0 14 14"
        //             >
        //               <path
        //                 stroke="currentColor"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 strokeWidth={2}
        //                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        //               />
        //             </svg>
        //             <span className="sr-only">Close modal</span>
        //           </button>
        //         </div>
        //         {/* <!-- Modal body --> */}
        //         <div className="p-4 space-y-4 md:p-5">
        //           <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        //             With less than a month to go before the European Union enacts new consumer privacy laws for its
        //             citizens, companies around the world are updating their terms of service agreements to comply.
        //           </p>
        //           <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        //             The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
        //             meant to ensure a common set of data rights in the European Union. It requires organizations to
        //             notify users as soon as possible of high-risk data breaches that could personally affect them.
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </>
      )}
    </div>
  );
}

export default App;
