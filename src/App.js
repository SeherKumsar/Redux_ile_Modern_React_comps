import { GoBell } from "react-icons/go";
// npm install --save-exact react-icons@4.6.0
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
