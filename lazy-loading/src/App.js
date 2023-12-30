import { React, Suspense, lazy } from "react";
import data from "./CardData.js";
const Card = lazy(() => import("./Card.js"));

function App() {
  return (
    <div>
      {data.map((card, key) => {
        return (
          <Suspense fallback={() => <div>Loading...</div>}>
            <Card details={card} key={key} />
          </Suspense>
        );
      })}
    </div>
  );
}

export default App;
