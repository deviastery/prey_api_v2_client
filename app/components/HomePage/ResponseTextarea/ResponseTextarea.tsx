import getResponse from "../../../utils/getResponse";
// import deleteTechnicalProperties from "../../../utils/deleteTechnicalProperties";

import styles from "./ResponseTextarea.module.css";
import { useState, useEffect } from "react";

interface ResponseTextareaProps {
  request: string;
}

const ResponseTextarea = ({ request }: ResponseTextareaProps) => {
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const prevRes = await getResponse(request);
      if (prevRes) {
        if (!Array.isArray(prevRes)) {
          const res = [];
          res.push(prevRes);
          setText(res);
          return;
        }
        setText(prevRes);
        return;
      }
      setText(["Not Found"]);
    })();
  }, [request]);

  function formatText(text: string[]) {
    if (!text) return "";
    if (text[0] === "Not Found") return "Not Found";
    return text
      .map((item) => {
        // deleteTechnicalProperties(item);
        return JSON.stringify(item, null, 4);
      })
      .join(",\n");
  }

  return (
    <div className={styles.response_textarea__container}>
      <textarea
        name="response"
        id=""
        cols={70}
        rows={30}
        className={styles.response_textarea}
        value={formatText(text)}
        readOnly
      ></textarea>
    </div>
  );
};

export default ResponseTextarea;
