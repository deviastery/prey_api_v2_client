"use client";
import { useState } from "react";

import Header from "./components/Header";
import ResponseTextarea from "./components/HomePage/ResponseTextarea";
import RequestInput from "./components/HomePage/RequestInput";

const HomePage = () => {
  const [request, setRequest] = useState("");

  return (
    <div>
      <Header />
      <div>
        <RequestInput setRequest={setRequest} />
        <ResponseTextarea request={request} />
      </div>
    </div>
  );
};

export default HomePage;
