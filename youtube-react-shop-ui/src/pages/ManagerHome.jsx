import { Link } from "react-router-dom";

export default function ManagerHome() {
    return (
        <div>
            <h1>Manager Home</h1>
            <Link to="/manager/product/add">Add Product</Link>
        </div>
    )
}