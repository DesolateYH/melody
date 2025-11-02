// Improved functions with input validation
function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    return a + b;
}

function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('Items must be an array');
    }

    // Use reduce for better performance
    return items.reduce((total, item) => {
        if (typeof item !== 'number') {
            throw new TypeError('All items must be numbers');
        }
        return total + item;
    }, 0);
}