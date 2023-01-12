import { useEffect, useState } from "react";

export const useFetchMd = (path) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (path) {
      fetch(path)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          setText(text);
        });
    }
  }, [path]);
  return { markdown: text };
};
