import { useState } from 'react';
import './ProductForm.css';
import NewProduct from './NewProduct';

function ProductForm() {

    // const [fullProductInput, setfullProductInput] = useState({
    //     title: '',
    //     date: ''
    // });



    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        // let obj = {...prevState, title:event.target.value};
        // console.log(obj);
        // return obj;
        setTitle(event.target.value);
    }

    function dateChangeHandler(event) {
        //console.log(event.target.value);
        setDate(event.target.value);
        // console.log(title);
        // console.log(date);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        };

        console.log(productData);

        setTitle('');
        setDate('');
    }
    

    return (<form onSubmit={submitHandler} className='new-product__controls'>
        <div className='new-product_title'>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
        </div>

        <div className='new-product_date'>
            <label>Date</label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </form>)
}

export default ProductForm;