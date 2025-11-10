import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  </Provider>
)
