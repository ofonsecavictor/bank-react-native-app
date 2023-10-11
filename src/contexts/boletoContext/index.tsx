import React, {createContext, useContext, useMemo, useState} from 'react';

type Context = {
  ticketNumber: number;
  setTicketNumber: (item: number) => void;
};

const TicketContext = createContext({} as Context);

export const TicketProvider = ({children}: any) => {
  const [ticketNumber, setTicketNumber] = useState<number>(0);

  const value = useMemo(
    () => ({
      ticketNumber,
      setTicketNumber,
    }),
    [ticketNumber, setTicketNumber],
  );

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};

export const useTicket = (): Context => {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error('ModalProvider Error');
  }

  return context;
};
