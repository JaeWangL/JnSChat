export const isNullOrEmpty = (inputString: string): boolean => {
    if (inputString === null || inputString.length === 0) {
        return true;
    }

    return false;
};
