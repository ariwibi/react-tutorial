// import { useRouteError } from "react-router-dom";
// export default function ErrorPage() {
//   const error = useRouteError();

//   if (error) {
//     if (error.status === 404) {
//       return <div>This page doesn't exist!</div>;
//     }

//     if (error.status === 401) {
//       return <div>You aren't authorized to see this</div>;
//     }

//     if (error.status === 503) {
//       return <div>Looks like our API is down</div>;
//     }

//     if (error.status === 418) {
//       return <div>🫖</div>;
//     }
//   }

//   return <div>Something went wrong</div>;
// }

// import { useAsyncError, Await, isRouteErrorResponse } from "react-router-dom";
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  // const error = useAsyncError();
  // if (isRouteErrorResponse(error)) {
  //   if (error.status === 404) {
  //     return <div>This page doesn't exist!</div>;
  //   }
  //   if (error.status === 401) {
  //     return <div>You aren't authorized to see this</div>;
  //   }
  //   if (error.status === 503) {
  //     return <div>Looks like our API is down</div>;
  //   }
  //   if (error.status === 418) {
  //     return <div>🫖</div>;
  //   }
  // }
  // return <div>Something went wrong</div>;

  const error = useRouteError();
  console.error(error);

  return (
    <div className="pageError">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected has occurred.</p>
      <p>
        <i>{error.status || error.message}</i>
      </p>
    </div>
  );
}
