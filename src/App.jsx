import B from "./components/B";
import { NameProvider } from "./contexts/NameContext";

// 2. Wrap the component tree with the context provider

const App = () => {

    return (
        <NameProvider>
            <B />
        </NameProvider>
    )
}

export default App;