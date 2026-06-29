import { useState } from "react";
import BackgroundList from "./BackgroundList";

function GroupEdit({ groupData, closePopup }) {
  const [backgroundsOpen, openBackgrounds] = useState(true);
  const [backgroundsData, setBackgrounds] = useState(null);

  const closeWithoutSave = async () => {
    let response = confirm("Close without saving?");
    if (response) {
      closePopup();
    }
  }

  const saveData = async () => {
    closePopup();
  }

  return(<>
  <div className="position-fixed top-0 start-0 vh-100 vw-100 bg-dark opacity-75 z-1"/>
    
  <section className="position-fixed top-50 start-50 translate-middle bg-white z-2 py-3 px-5 rounded" style={{height: "80vh", width: "80vw"}}>
    <h1 className="border-bottom border-2">Edit Group</h1>

    <section className="mt-4 d-flex flex-column" style={{ height: 'calc(100% - 4rem)' }}>
      <form className="flex-grow-1 overflow-scroll">
        <div>
          <label>Group Name</label>
          <br/>
          <input name="name" type="text" placeholder="Name" required/>
        </div>

        <div className="mt-3">
          <input className="me-2" name="changeColor" type="checkbox"/>
          <label>Change Terminal Color</label>
        </div>

        <div className="mt-3">
          <input className="me-2" name="changeKvantum" type="checkBox"/>
          <label>Change Kvantum Color - <span className="text-danger fw-bold">Requires Kvantum and Glassy theme</span></label>
        </div>

        <div className="mt-3">
          <label>Text Color</label>
          <div>
            <input className="me-2" name="textColor" type="radio" value="light"/>
            <label>Light</label>
          </div>
          <div>
            <input className="me-2" name="textColor" type="radio" value="dark"/>
            <label>Dark</label>
          </div>
          <div>
            <input className="me-2" name="textColor" type="radio" value="dark"/>
            <label>Custom</label>
            <input className="ms-2 text-center" type="text" placeholder="#000000" style={{width: "6rem"}}/>
          </div>
        </div>

        <a className="btn btn-info mt-3 text-white fw-bold" onClick={() => { openBackgrounds(true);}}>Manage Backgrounds</a>
      </form>

      <section className="mt-auto text-end">
        <a className="btn btn-warning me-2 text-white fw-bold" onClick={closeWithoutSave}>Close</a>
        <a className="btn btn-info text-white fw-bold">Save</a>
      </section>
    </section>
  </section>

  { backgroundsOpen && <BackgroundList close={() => {openBackgrounds(false)}}/> }
  </>);
}

export default GroupEdit; 