import Window from "./components/window";

function App() {
  return (
    <div>
      <Window width={"50vh"} height={"15vh"}>
        <p>Hello</p>
      </Window>
      <Window width={"400px"} height={"300px"}>
        <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" ></iframe>
      </Window>
    </div>
  );
}

export default App;
