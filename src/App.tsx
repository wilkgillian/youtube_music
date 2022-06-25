import { Header } from './components/Header';
import { Artist } from './sections/Artist';
import { QuickPicks } from './sections/QuickPicks';
import { Recomend } from './sections/Recomend';
import { TodayHits } from './sections/TodayHits';
import { Top } from './sections/Top';

function App() {
  return (
    <div>
      <Header />
      <main>
        <QuickPicks />
        <TodayHits />
        <Artist />
        <Top />
        <Recomend />
      </main>
    </div>
  );
}

export default App;
