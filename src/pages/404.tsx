import React from "react";
import { HeadFC } from "gatsby";

const NotFoundPage: React.FC = () => {
  return (
    <main>
      <div>Page Not Found</div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
