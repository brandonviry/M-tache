import TaskList from "./ui/components/TaskList/TaskList";
import "./App.css";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Liste de tache
      </h1>
      <TaskList />
    </>
  );
}

export default App;
