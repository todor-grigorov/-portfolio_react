import { createContext } from 'react';

export interface IGlobalContext {
  appLoading: boolean;
  setAppLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// export const useLoading = (): [
//   boolean,
//   {
//     appLoading: boolean;
//     setAppLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   }
// ] => {
//   const [globalLoading, setGlobalLoading] = useState(true);
//
//   const loadingMode = useMemo(
//     () => ({
//       // toggleLoading: () =>
//       //   setGlobalLoading((prev) => (prev === false ? true : false)),
//       setAppLoading: setGlobalLoading,
//       appLoading: globalLoading,
//     }),
//     [globalLoading]
//   );
//
//   return [globalLoading, loadingMode];
// };

export const GlobalContext = createContext<null | IGlobalContext>(null);
