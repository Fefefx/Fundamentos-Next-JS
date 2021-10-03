import listProducts from "../../data/listProducts";

export default function repetition2(){
    
    const withBorder = {
        border: "1px solid #000"
    };

    function renderRows(){
        return listProducts.map(product => {
            return (
                <tr key={product.id} >
                    <td style={withBorder}>{product.id}</td>
                    <td style={withBorder}>{product.name}</td>
                    <td style={withBorder}>{product.price}</td>
                </tr>
            );
        })
    }

    return (
        <div>
            <table style={withBorder}>
                <thead>
                    <tr>
                        <th> Código </th>
                        <th> Nome  </th>
                        <th> Preço </th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
}