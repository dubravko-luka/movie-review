import { ReactNode, createContext, useContext, useState } from "react";

type AppStateProps = {
	menu?: any;
	widthClient?: number;
};

const defaultValues = {
	menu: {},
	widthClient: 0,
};

const AppStateContext = createContext<Record<any, any>>({});

export function useAppState() {
	return useContext(AppStateContext);
}

export function AppContextProvider({ children }: { children: ReactNode }) {
	const [appState, setAppState] = useState<AppStateProps>(defaultValues);

	return <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>;
}
