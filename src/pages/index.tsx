import React from "react";
import { HeadFC } from "gatsby";

const IndexPage: React.FC = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
