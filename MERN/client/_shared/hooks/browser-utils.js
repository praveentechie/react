export const useCopyToClipboard = (elementRef) => {
  elementRef.current.focus();
  elementRef.current.select();
  document.execCommand('copy');
};

export const useDocumentTitle = (title = 'MERN POC') => {
  document.title = title;
};
