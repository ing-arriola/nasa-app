import React from "react";

interface Props {
  search: string;
  setsearch: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput = ({ search, setsearch }: Props) => {
  return (
    <div className="d-flex w-25 flex-column justify-content-center ">
      <h3>What are you looking for?</h3>
      <input
        className="mt-2"
        placeholder="Enter here your query"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
