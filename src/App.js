import './App.css';
import {Photo} from './components/Photo-Beach.js'
import {Content} from './components/Content.js'
import {Header} from './components/Header.js'
import {Wave} from './components/Wave.js'

function App() {
  return (
    <div>
      <Header />
      <Photo />
      <Content />
      <Wave/>
    </div>
  );
}

export default App;
