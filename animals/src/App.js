function App() {
  const handelClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <div>
      <button onClick={handelClick}>Add Animal</button>
    </div>
  );
}

export default App;
