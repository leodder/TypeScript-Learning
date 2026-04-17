import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet"
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscars from "./components/Oscars";
import Person from "./components/Person"
import PersonList from "./components/PersonList";
import Status from "./components/Status";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Box from './components/context/Box';
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

function App() {
  const firstName = "Justin";
  const lastName = "Bieber";
  const nameList = [
    { first: "Justin", last: "Bieber" },
    { first: "John", last: "Wick" },
    { first: "D", last: "Trump" }
  ]
  return (
    <>
      {/* <ThemeContextProvider>
        <Box /> */}
      <UserContextProvider>
        <User />
      <Greet name={"Leo"} isLoggedIn={true} />
      <Person firstName={firstName} lastName={lastName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>PlaceHolder text</Heading>
      <Oscars>
        <Heading>Oscars goes to D.Trump</Heading>
      </Oscars>
      <Button handleClick={(event, id) => console.log("123", event, id)} >Click me</Button>
      <Input value={"Test"} handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "10px", position: "relative", top: "10px" }} />
      {/* </ThemeContextProvider> */}
      </UserContextProvider>
    </>
  )
}

export default App
