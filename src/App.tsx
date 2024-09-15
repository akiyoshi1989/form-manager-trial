import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserManager from "./pages/user-manager";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserManager />
      </QueryClientProvider>
    </>
  );
}

export default App;
