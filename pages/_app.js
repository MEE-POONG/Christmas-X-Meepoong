import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "tailwindcss/tailwind.css";
import { RecoilRoot } from "recoil";


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>

    
  );
}

export default MyApp;
