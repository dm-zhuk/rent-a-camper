import { createContext, useState } from 'react';

export const PaginationContext = createContext({
  currentPage: 1,
  increasePage: () => {},
  resetPage: () => {},
});

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const increasePage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        increasePage,
        resetPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const scrollSmoothlyTo = ref => {
  setTimeout(() => {
    if (!ref.current) return;

    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth',
    });
  }, 0);
};
