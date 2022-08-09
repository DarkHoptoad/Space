import { Link } from "react-router-dom";
function Nothing() {
  return (
    <>
      <h1>Ooops, Nothing!</h1>
      <Link to="/">Go home</Link>
    </>
  );
}

export { Nothing };
