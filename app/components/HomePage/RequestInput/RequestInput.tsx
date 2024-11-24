import { Dispatch, SetStateAction, useState } from "react";
import PropTypes from "prop-types";
import styles from "./RequestInput.module.css";

const RequestInput = ({
  setRequest,
}: {
  setRequest: Dispatch<SetStateAction<string>>;
}) => {
  const [inputValue, setInputValue] = useState("");

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setRequest(inputValue);
    }
  }

  return (
    <div className={styles.request_input__container}>
      <div className={styles.request_input__root}>
        http://localhost:5000/api/v1/
      </div>
      <input
        className={styles.request_input__url_input}
        type="text"
        placeholder="hostiles"
        value={inputValue}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={styles.request_input__request_button}
        onClick={() => setRequest(inputValue)}
      >
        request
      </button>
    </div>
  );
};

RequestInput.propTypes = {
  setRequest: PropTypes.func,
};

export default RequestInput;
