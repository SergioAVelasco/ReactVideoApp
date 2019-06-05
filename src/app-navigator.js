
import { createStackNavigator,createAppContainer } from 'react-navigation'
import Loading from './sections/components/loading'

const Main = createStackNavigator(
        {
            Home: {
                screen : Loading
            }
        }
)

const App = createAppContainer(Main);

export default App 