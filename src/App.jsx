import { useState } from "react";
import GroupEdit from "./components/GroupEdit";

function App() {
  const [popup, setPopup] = useState(false);
  const [loadedData, setData] = useState(null);

  const openEdit = async () => {
    setPopup(true);

  }

  return (<>
    <header className="text-center border-2 border-bottom pt-3">
      <h1>BGM Manager</h1>
      <p className="fs-6 text-muted">Yes, that says Background Manager Manager</p>
    </header>

    <main className="pt-3 d-flex flex-column" style={{ minHeight: 'calc(100vh - 8rem)' }}>
      <section className="border border-2 w-75 flex-grow-1 text-center mx-auto overflow-scroll">
        <p>Your Groups</p>
      </section>
      <a className="btn btn-info fw-bold text-white mt-3 mx-auto mb-3" onClick={() => {setPopup(true)}}>Add Background Group</a>
    </main>

    { popup && <GroupEdit groupData={loadedData} closePopup={() => {setPopup(false)}}/> }
  </>);
}

export default App;
