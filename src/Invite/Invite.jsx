function Invite() {
  const asd = window.location.search.split("?x=")?.[1];
  return (
    <div>
      <div className="App">
        <p>
          Invite for <span style={{ fontWeight: "bold" }}>{atob(asd)}</span>
        </p>
      </div>
    </div>
  );
}

export default Invite;
