export const submitForm = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data submitted to fake API:", data);
            resolve(data);
        }, 2000);
    });
};
