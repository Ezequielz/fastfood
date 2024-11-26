import { create } from "zustand";


interface State {
    isSideMenuAdminOpen: boolean;
    //UI
    openSideMenuAdmin: () => void;
    closeSideMenuAdmin: () => void;
    toggleSideMenuAdmin: () => void;
}



export const useUiStore = create<State>()((set) => ({
    isSideMenuAdminOpen: false,
    openSideMenuAdmin: () => {
        set({ isSideMenuAdminOpen: true });
    },
    closeSideMenuAdmin: () => {
        set({ isSideMenuAdminOpen: false });
    },
    toggleSideMenuAdmin: () => {
        set((state) => ({ isSideMenuAdminOpen: !state.isSideMenuAdminOpen }));
    }
}));