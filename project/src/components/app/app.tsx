import HomePage from '../../pages/home/HomePage';
import {AppProps} from '../../types/Props';

function App( props: AppProps ): JSX.Element {
  return <HomePage {...props.homePageProps}/>;
}

export default App;
