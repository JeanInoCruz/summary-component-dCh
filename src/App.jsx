import { useEffect, useState } from "react";
import { AtributionFooter } from "./components/AtributionFooter";
import { ItemCard } from "./components/ItemCard";
import { ResultCard } from "./components/ResultCard";
import { SummaryCard } from "./components/SummaryCard";

function App() {
  const [data, setData] = useState("");
  const [result, setResult] = useState(0);


  const getData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        suma(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const suma = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].score;
    }
    setResult(Math.round(sum/data.length));
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <ResultCard data={data} result={result} />
        <SummaryCard>
          <ItemCard data={data} />
        </SummaryCard>
        <AtributionFooter />
      </main>
    </>
  );
}

export default App;
