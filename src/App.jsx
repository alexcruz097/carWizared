import axios from "axios";
export default function App() {
  const requestData = () => {
    axios({
      method: "get", //you can set what request you want to be
      url: "https://api.api-ninjas.com/v1/cars?limit=10&make=toyota&model=camry&year=2006",
      headers: {
        "X-Api-Key": "Wr9bn0XL8lDxYXvYD/a9lw==1cC6rox7yi3vocrc",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <button type="button" onClick={requestData}>
        Get Mercedes
      </button>
    </>
  );
}
