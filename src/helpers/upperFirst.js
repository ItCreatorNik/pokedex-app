export const ucFirst = (pokeName) => {
    let result = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

    return result;
};