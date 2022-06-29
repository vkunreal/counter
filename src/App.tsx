import { Provider } from "react-redux";
import { CounterList } from "./components/CounterList";
import { store } from "./store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CounterList />
    </Provider>
  );
};

export default App;
