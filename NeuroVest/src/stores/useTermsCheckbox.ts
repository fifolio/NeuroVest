import { create } from 'zustand';

interface useTermsCheckbox {
    isAccepted: boolean,
    setIsAccepted: (prevState: boolean) => void
}

const useTermsCheckbox = create<useTermsCheckbox>((set) => ({
    isAccepted: false,
    setIsAccepted: () => set((prevState) => ({ isAccepted: !prevState.isAccepted }))
}));

export default useTermsCheckbox;