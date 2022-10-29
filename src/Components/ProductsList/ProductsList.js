import "./ProductsList.css"

let ProductsList = function ({onClick , children}) {
    return (
        <products-list onClick={onClick}>
            {children}
        </products-list>
    )
};

export default ProductsList;