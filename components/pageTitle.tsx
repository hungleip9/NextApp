import { useState, useEffect } from "react";

export default function PageTitle() {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPageTitle(document.title);
  }, []);

  return <p>Page title: {pageTitle}</p>;
}
