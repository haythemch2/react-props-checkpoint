import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const style = { border: "solid 1px black", maxWidth: "100vw" };
  const handleName = () => {
    alert("fullname");
  };
  return (
    <>
      <Profile
        fullName="nametest"
        bio="biotest"
        profession="professiontest"
        onClick={handleName}
      >
        <img src="https://image.flaticon.com/icons/png/512/147/147144.png"></img>
      </Profile>
    </>
  );
}

export default App;
