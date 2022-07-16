import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/page1/detailA">DetaiA</Link>
      <Link to="/page1/detailB">DetaiB</Link>
    </div>
  );
};
