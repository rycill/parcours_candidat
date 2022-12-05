import data from "../../../data/candidates.json";
import React, { useState, useEffect } from "react";
import Wait from "./Wait";
const WithCandidates = (WrappedComponent) => {
  const [candidates, setCandidates] = useState(null);
  useEffect(() => {
    //TODO loader depuis AWS
    setTimeout(() => {
      setCandidates(data);
    }, 1000);
  }, []);

  return candidates ? (
    <WrappedComponent candidates={candidates}></WrappedComponent>
  ) : (
    <Wait text="Loading Candidates..." />
  );
};

export default WithCandidates;
