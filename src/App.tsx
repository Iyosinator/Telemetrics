import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { StoreProvider } from "./store";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function App() {
  return (
    <>
      <Header />
      <StoreProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </StoreProvider>
      <Footer />
    </>
  );
}

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  }, [darkMode]);

  const sun = (
    <path
      fill="none"
      d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"
    />
  );

  const moon = (
    <path
      fill="none"
      d="M15.131,8.29c-0.944,0-1.711,0.766-1.711,1.71s0.767,1.711,1.711,1.711s1.71-0.767,1.71-1.711S16.075,8.29,15.131,8.29 M15.131,10.855c-0.472,0-0.855-0.383-0.855-0.855s0.384-0.855,0.855-0.855S15.986,9.528,15.986,10S15.603,10.855,15.131,10.855 M12.993,15.131c-0.236,0-0.428,0.191-0.428,0.427c0,0.237,0.191,0.429,0.428,0.429c0.235,0,0.427-0.191,0.427-0.429C13.42,15.322,13.229,15.131,12.993,15.131 M4.87,10.855c-0.473,0-0.855,0.383-0.855,0.856c0,0.471,0.383,0.854,0.855,0.854c0.472,0,0.854-0.384,0.854-0.854C5.724,11.238,5.341,10.855,4.87,10.855 M8.717,12.565c-0.708,0-1.283,0.574-1.283,1.283c0,0.708,0.574,1.282,1.283,1.282S10,14.557,10,13.849C10,13.14,9.426,12.565,8.717,12.565M8.717,14.275c-0.236,0-0.427-0.191-0.427-0.427c0-0.236,0.191-0.429,0.427-0.429s0.427,0.192,0.427,0.429C9.145,14.084,8.953,14.275,8.717,14.275 M11.283,10c-0.236,0-0.428,0.191-0.428,0.428c0,0.236,0.191,0.427,0.428,0.427c0.235,0,0.427-0.191,0.427-0.427C11.71,10.191,11.519,10,11.283,10 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552c0-4.722,3.828-8.551,8.551-8.551S18.552,5.278,18.552,10C18.552,14.723,14.723,18.552,10,18.552M7.435,4.014c-1.417,0-2.565,1.149-2.565,2.565c0,1.417,1.148,2.565,2.565,2.565C8.851,9.145,10,7.997,10,6.58C10,5.164,8.851,4.014,7.435,4.014 M7.435,8.29c-0.944,0-1.71-0.766-1.71-1.71c0-0.945,0.766-1.71,1.71-1.71c0.945,0,1.71,0.765,1.71,1.71C9.145,7.524,8.379,8.29,7.435,8.29"
    />
  );

  return (
    <header className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
      </div>
      <div>
        <h2 className="text-2xl">Telemetrics</h2>
      </div>

      <div className="navbar-end">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 stroke-current"
          >
            {darkMode ? sun : moon}
          </svg>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-base-100">
      <div className="items-center grid-flow-col">
        <p className="">Made with ❤️ By Eyosias Mulugeta</p>
      </div>
    </footer>
  );
}

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops, something went wrong!</h1>
          <p className="py-6">
            The file you provided might be corrupted or not supported. This
            website expect a json file exported by Telegram.
          </p>
          <Link
            to="/"
            className="btn btn-primary"
            onClick={() => {
              resetErrorBoundary();
            }}
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
