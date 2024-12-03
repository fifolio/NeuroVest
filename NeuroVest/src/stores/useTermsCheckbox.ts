import { create } from 'zustand';

interface useTermsCheckbox {
    isAccepted: boolean | undefined,
    setIsAccepted: (prevState: boolean) => void
}

const useTermsCheckbox = create<useTermsCheckbox>((set) => ({
    isAccepted: undefined,
    setIsAccepted: () => set((prevState) => ({ isAccepted: !prevState.isAccepted }))
}));

export default useTermsCheckbox;