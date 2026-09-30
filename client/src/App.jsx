import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("Auth_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const BackgroundSetter = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.background = "";

    if (
      location.pathname.startsWith("/pets/") ||
      location.pathname.startsWith("/pet")
    ) {
      document.body.style.background =
        'url("/images/Pet Background.jpg") no-repeat center center fixed';
      document.body.style.backgroundSize = "cover";
    } else if (location.pathname.startsWith("/shop")) {
      document.body.style.background =
        'url("/images/dogTreats1.jpg") no-repeat center fixed';
      document.body.style.backgroundSize = "cover";
    } else if (location.pathname === "/login") {
      document.body.style.background =
        'url("/images/background1.jpg") no-repeat center fixed';
      document.body.style.backgroundSize = "cover";
    } else {
      document.body.style.background = "white";
    }

    return () => {
      document.body.style.background = "";
    };
  }, [location]);

  return null;
};

function App() {
  return (
    <ApolloProvider client={client}>
      <BackgroundSetter />
      <div className="d-flex flex-column min-vh-100">
        <Nav />
        <main className="flex-grow-1 d-flex flex-column justify-content-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
