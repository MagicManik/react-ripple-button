import Layout from "./Layout/Layout";
import RippleButton from "./RippleButton/RippleButton";
import './App.css';
// import RippleButtonTwo from "./RippleButtonTwo/RippleButtonTwo";
import Button from "./Button/Button";
import IconButton from "./IconButton/IconButton";
import IconButtonTwo from "./IconButtonTwo/IconButtonTwo";

function App() {
  return (
    <>
      <Layout>
        <RippleButton />
        {/* <RippleButtonTwo /> */}
        <IconButton />
        <Button />
        <IconButtonTwo />
      </Layout>
    </>
  );
}

export default App;
