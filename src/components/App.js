import Avatar from "./Avatar";
import ClockIcon from "./ClockIcon";
import Container from "./Container";
import EtheIcon from "./EtheIcon";
import Heading from "./Heading";
import ImageComponent from "./ImageComponent";
import Paragraph from "./Paragraph";
import Button from "./Button";


function App() {
  return (
    <div className="App">
     <Container>
        <ImageComponent />
        <Heading number="3729"/>
        <Paragraph />
        <ClockIcon days="7" />
        <EtheIcon ethereum="0.033" />
        <Avatar author="Tamanaco Martínez" />
        <Button/>
     </Container>
    </div>
  );
}

export default App;
