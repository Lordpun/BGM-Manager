function BackgroundList({BackgroundData, close}) {
  const closeList = async () => {
    close();
  }

  return (<>
  <div className="position-fixed top-0 start-0 vh-100 vw-100 bg-dark opacity-75 z-2"/>

  <section className="position-fixed top-50 start-50 translate-middle bg-white z-2 py-3 px-5 rounde" style={{ height: 'calc(100% - 4rem)', width: "20rem" }}>
    <a className="btn btn-info text-white fw-bold mx-auto" onClick={() => {closeList();}}>Close</a>
  </section>
  </>)
}

export default BackgroundList;