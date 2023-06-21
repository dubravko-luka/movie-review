import { ReactNode, createContext, useContext, useState } from "react";

type AppState = {
	widthClient?: number;
};

type AppStateContextType = {
	appState: AppState;
	setAppState: (state: AppState | ((prevState: AppState) => AppState)) => void;
};

const defaultValues: AppState = {
	widthClient: 0,
};

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function useAppState(): AppStateContextType {
	const context = useContext(AppStateContext);
	if (!context) {
		throw new Error("useAppState must be used within an AppContextProvider");
	}
	return context;
}

export function AppContextProvider({ children }: { children: ReactNode }) {
	const [appState, setAppState] = useState<AppState>(defaultValues);

	const updateAppState = (state: AppState | ((prevState: AppState) => AppState)) => {
		setAppState((prevState) => {
			if (typeof state === "function") {
				return state(prevState);
			}
			return { ...prevState, ...state };
		});
	};

	return (
		<AppStateContext.Provider value={{ appState, setAppState: updateAppState }}>
			{children}
		</AppStateContext.Provider>
	);
}
