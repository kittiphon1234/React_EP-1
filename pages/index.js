import Theme from "../components/theme";

const Index = (props) => {
  return <div>
    <h1>Hello Kittiphon!!</h1>
    <h1 style={{ textAlign: 'center' }}>login now!</h1>
    <input
      style={{textAlign: 'center'}}
      type='text'

    >

    </input>
  </div>;
};

export default Theme(Index);
