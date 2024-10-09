import "./Book.css";
import OrderButton from "./OrderButton";

const Book = (props) => {
    return (
        <div className="one-book">
            <h2 className="main-heading">{props.title}</h2>
            <img src={props.image} alt="obrázek" />
            <p>{props.description}</p>
            <OrderButton />
        </div>
    )
}

export default Book;