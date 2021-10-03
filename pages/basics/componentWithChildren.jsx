import Item from "../../components/Item";
import List from "../../components/List";

export default function componentWithChildren (){
    return (
        <div>
            <List>
                <Item content="Item #1"></Item>
                <Item content="Item #2"></Item>
                <Item content="Item #3"></Item>
                <Item content="Item #11"></Item>
                <Item content="Item #12"></Item>
                <Item content="Item #13"></Item>
            </List>
        </div>
    );
}