import { GoBell, GoCloudDownload , GoDatabase} from "react-icons/go";
// npm install --save-exact react-icons@4.6.0
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell className="mr-1" />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload className="mr-1" />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase className="mr-1" />
          See Deal!
        </Button>
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
