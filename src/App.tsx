import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './components/hooks/useTransactions';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';


import { NewTransactionModal } from './components/NewTransactionModal';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Background } from './components/Background';

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Router>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

        <AppRoutes />

        <NewTransactionModal
          isOpen={isNewTrasactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <Footer />
        <GlobalStyle />
      </TransactionsProvider>
    </Router>
  );
}
