import { Link } from "react-router-dom";

export default function ManagerHome() {
    return (
        <div>
            <h1>Manager Home</h1>
            <Link to="/manager/product/add">Add Product</Link>
            <br />
            <Link to="/manager/category/add">Add Category</Link>
        </div>
    )
}