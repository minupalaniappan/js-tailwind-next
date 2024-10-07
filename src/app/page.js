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
  const fetchAsync = async () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((e) => e.json())
      .then((e) => console.info(e))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <Title>Hello world!</Title>
      <button onClick={async () => await fetchAsync()} />
    </div>
  );
};

export default Page;
