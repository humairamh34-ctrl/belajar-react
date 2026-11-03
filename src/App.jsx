import PropsApp from "./latihan/03-props/PropsApp"; 
import Kimia from "./latihan/04-useState/Kimia";
import Use from "./latihan/05-useEffect/Use";
import Event from "./latihan/06-event-handling/Event";
import Conditional from "./latihan/07-conditional-rendering/Conditional";
import List from "./latihan/08-list-key/List";

function App() {
  return (
    <div>
      <h1>Unsur Kimia dalam Tabel Periodik</h1>
      <PropsApp />
      <hr />

      <Kimia />
      <hr />

      <Use />
      <hr />

      <Event />
      <hr />

      <Conditional />
      <hr />

      <List />
    </div>
  );
}


  export default App;