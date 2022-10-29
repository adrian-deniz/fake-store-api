import "./ProductsList.css"

let ProductsList = function ({children}) {
    return (
        <products-list>
            {children}
        </products-list>
    )
};

export default ProductsList;