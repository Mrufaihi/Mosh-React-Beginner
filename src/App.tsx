//imports
import './App.css';
import Expandable from './components/Expandable/Expandable';

function App() {
  return (
    <div>
      <Expandable maxChars={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel
        reiciendis facere illum iste! Rem dolorum a dolore, dignissimos autem
        itaque quasi cupiditate dicta repellendus eos repudiandae consequuntur
        voluptatum minus. Rem blanditiis deserunt, molestias architecto unde
        exercitationem provident doloremque quasi esse nesciunt vitae magni,
        quaerat autem praesentium. Obcaecati, ipsum enim!
      </Expandable>
    </div>
  );
}

export default App;
