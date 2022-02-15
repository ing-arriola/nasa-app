import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { dataApi } from "../../Api/nasaApi";
import DisplayInformation from "./DisplayInformation";
import TextInput from "../../components/TextInput";
import { useDebouncer } from "../../hooks/useDebouncer";
import { Item, NasaData } from "../../interfaces/search";

const LibraryScreen = () => {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState<Item[]>([]);
  const debouncedValue = useDebouncer(search);

  const getData = useCallback(async () => {
    if (debouncedValue) {
      const res = await dataApi.get<NasaData>(`/search?q=${debouncedValue}`);
      setresults(res.data.collection.items);
    } else {
      setresults([]);
    }
  }, [debouncedValue]);

  useEffect(() => {
    getData();
  }, [debouncedValue, getData]);

  return (
    <div className="d-flex  flex-column align-items-center  ">
      <TextInput search={search} setsearch={setsearch} />
      <Row className="d-flex justify-content-center p-5">
        {results.map((result) => (
          <DisplayInformation
            key={result.href}
            data={result.data}
            links={result.links}
          />
        ))}
      </Row>
    </div>
  );
};

export default LibraryScreen;
