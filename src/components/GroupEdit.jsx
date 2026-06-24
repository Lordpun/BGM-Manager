function GroupEdit({ groupData, closePopup }) {
  const saveData = async () => {
    closePopup();
  }

  return(<>
  <div className="position-fixed top-0 start-0 vh-100 vw-100 bg-dark opacity-75 z-1"/>
    
  <section className="position-fixed top-50 start-50 translate-middle bg-white z-2 py-3 px-5 rounded" style={{height: "80vh", width: "80vw"}}>
    <h1 className="border-bottom border-2">Edit Group</h1>

    <section className="mt-4 d-flex flex-column" style={{ minHeight: 'calc(100% - 4rem)' }}>
      <form className="flex-grow-1">
        <div>
          <label>Group Name</label>
          <br/>
          <input name="name" type="text" placeholder="Name" required/>
        </div>
        <div className="mt-2">
          <input name="changeColor" type="checkbox"/>
          <label>Change Terminal Color</label>
        </div>
        <div className="mt-2">
          <input name="changeKvantum" type="checkBox"/>
          <label>Change Kvantum Color - <span className="text-danger fw-bold">Hardcoded for Glassy theme</span></label>
        </div>
      </form>

      <section className="mt-auto text-end">
        <a className="btn btn-warning me-2" onClick={closePopup}>Close</a>
        <a className="btn btn-info">Save</a>
      </section>
    </section>
  </section>
  </>);
}

export default GroupEdit; 