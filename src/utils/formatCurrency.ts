


export const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS', 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currencyDisplay: 'narrowSymbol', 
    }).format(price / 100);
}