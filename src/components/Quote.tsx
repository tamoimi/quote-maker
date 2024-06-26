interface Props {
  data: any;
  isLoading: boolean;
}

const Quote = ({ data, isLoading }: Props) => {
  return (
    <>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {isLoading ? "Loading..." : data?.slip.advice}
        </p>
      </div>
    </>
  );
};
export default Quote;
