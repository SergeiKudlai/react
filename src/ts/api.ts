export const getResponseData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.status) throw new Error('Ошибка сервера');
        return response.json();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
    }
};
