import Home from "./pages/Home/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClientProvider } from 'react-query';
import { queryClient } from "./services/queryClient";
import "../src/translations/i18n";

const App = () => {
  return (
    <>
      <QueryClientProvider  client={queryClient}>
        <GlobalStyles />
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
