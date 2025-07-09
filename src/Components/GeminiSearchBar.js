const GeminiSearchBar = () => {
  return (
    <div className="absolute bg-black top-36 left-[200px] w-[850px] mx-40 px-16 py-8 bg-opacity-70 rounded-sm">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-12 ">
        <input
          type="text"
          className="mr-9 px-5 py-3 col-span-10 rounded-sm"
          placeholder="What Would You Like To Watch Today?"
        ></input>
        <button className="bg-red-600 text-black rounded-sm px-5 py-3 col-span-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
