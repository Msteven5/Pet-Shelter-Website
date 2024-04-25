import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.error(error)
  return (
    <div>
      {/* <Jumbotron> */}
        <h1>Error: 404 Page Not Found</h1>

      {/* </Jumbotron> */}
    </div>
  );
};

export default Error;