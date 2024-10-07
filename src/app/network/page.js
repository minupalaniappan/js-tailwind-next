"use client";

/**
 * Functional Requirements
 *
 *
 *
 * Step by Step Process For Development
 *
 *
 *
 */

import { tw } from "@minupalaniappan/brise";
import get from "lodash/get";

const Title = tw.div`
  text-xl
  font-semibold

  ${(props) => {}}
`;

const Page = () => {
  const fetchDocumentsFromServerAsync = async () => {
    return fetch("/v1/documents")
      .then((e) => e.json())
      .then((e) => console.info(e))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <Title>Hello world!</Title>
      <button
        onClick={async () => await fetchDocumentsFromServerAsync()}
        title="Click"
        className="border rounded p-2 py-1 text-="
      >
        Click
      </button>
    </div>
  );
};

export default Page;
