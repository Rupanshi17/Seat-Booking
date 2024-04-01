import React,{useState} from "react";
import styles from './LoginForm.module.css';

const Seatswapform=()=>
{
    const [form,setForm] = useState(
        {
            bookseatid:"",
            swapseatid:"",
            
            
        }
        );
    const onUpdateField=e=>
    {
        const nextFormState={
            ...form,
            [e.target.name]:e.target.value
        }
        setForm(nextFormState)
    }

    const onSubmitForm=e=>
    {
        e.preventDefault();
        
        
        alert(JSON.stringify(form,null,2))
    } 

      
    return(
        
        <form className={styles.loginform} onSubmit={onSubmitForm}>
            <h2>Seat Swap</h2>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Book Seat Id:</h3> </label>
                <input type="text"
                name="bookseatid"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your booked seat id" required/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Swap Seat Id:</h3> </label>
                <input type="text"
                name="swapseatid"
                onChange={onUpdateField}
                className={styles.formInput}
                placeholder="Enter your swap seat id" required/>
            </div>
 
            <div className={styles.formActions}>
                <button className={styles.formSubmitBtn} type="submit">Send Request</button>
            </div>
        </form>
    );
}
 
export default Seatswapform;