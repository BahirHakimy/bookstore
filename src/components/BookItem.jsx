import React from 'react';

function BookItem({ book, onRemove }) {
  const {
    progress, title, category, author, currentChapter, circleStyles,
  } = book;
  return (
    <div className="grid grid-cols-[50%_repeat(2,1fr)] my-4 p-6 bg-white shadow">
      <div className="flex flex-col">
        <p className="text-[#121212] text-sm opacity-50 font-bold">
          {category}
        </p>
        <h2 className="text-[#121212] tracking-tighter font-bold text-xl">
          {title}
        </h2>
        <span className="text-[#4386bf] text-sm font-light">{author}</span>
        <ul className="flex items-center justify-start my-4">
          <li className="text-[#4386bf] text-sm font-light cursor-pointer border-r pr-4 ">
            Comments
          </li>
          <li className="text-[#4386bf] text-sm font-light cursor-pointer border-r pr-4 ml-4">
            <button type="button" onClick={onRemove}>
              Remove
            </button>
          </li>
          <li className="text-[#4386bf] text-sm font-light cursor-pointer ml-4">
            Edit
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className={`${circleStyles} h-[4.25rem] w-[4.25rem] rounded-full`}
        />
        <div className="border-r pr-16">
          <h3 className="text-[#121212] text-[2rem] ">
            {progress}
            %
          </h3>
          <p className="text-[#121212]  text-sm opacity-50">Completed</p>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <p className="text-[#121212] text-sm opacity-50 uppercase font-['Segoe_UI']">
          Current Chapter
        </p>
        <p className="text-[#121212] ">{currentChapter}</p>
        <button
          type="button"
          className="bg-[#0290ff] rounded uppercase text-sm w-max font-light px-5 py-2 my-4 text-white tracking-wide"
        >
          Update Progress
        </button>
      </div>
    </div>
  );
}

export default BookItem;
