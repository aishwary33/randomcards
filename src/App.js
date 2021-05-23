import { demodata } from "./demodata";
import styles from "./App.module.css"
import { hot } from "react-hot-loader/root";
import { lazy, Suspense } from "react";
import Loader from "./Components/loader/Loader";
const Cards = lazy(() => import("./Components/Cards"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.wrapper}>
        <ul className={styles.demolist}>
          {demodata.map(ele => (
            <li key={ele.id}>
              <Cards {...ele} />
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}

export default hot(App);
