import Window from "./components/window";
import TitleBar from "./components/titleBar";

function App() {
  return (
    <>
      <Window width={{value: 50, unit: "vh"}} height={{value: 15, unit: "vh"}}
      titleBar={<TitleBar/>}>
        <p>Hello</p>
      </Window>
      <Window width={{value: 400, unit: "px"}} height={{value: 300, unit: "px"}}
        titleBar={<TitleBar/>}
      >
        <iframe title="yt" src="https://express-bus-booking.netlify.app/" style={{width: "100%", height: "100%"}}></iframe>
      </Window>
    </>
  );
}

export default App;
