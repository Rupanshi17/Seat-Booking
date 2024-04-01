import React,{useState} from "react";
import styles from './LoginForm.module.css';
import Navbar from "./Navbar";
const Resetpassword=()=>
{
    const [form,setForm] = useState(
        {
            currentpassword:"",
            newpassword:"",
            confirmpassword:"",
            
            
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
        <div className={styles.userprofile}>
          <header className={styles.header}>
            <h1>My Profile</h1>
            
          </header>
          
          <Navbar/>
        <form className={styles.resetform} onSubmit={onSubmitForm}>
            <h2>Reset Paaword</h2>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>Current Password:</h3> </label>
                <input type="text"
                name="password"
                onChange={onUpdateField}
                className={styles.formFields}
                placeholder="Current password" required/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}><h3>New Password:</h3> </label>
                <input type="password"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                className={styles.formFields} 
                placeholder="Password" required/>
            </div>

            <div className={styles.formsGroup}>
                <label className={styles.formsLabel}><h3>Confirm Password:</h3> </label>
                <input type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={onUpdateField}
                className={styles.formFields} 
                placeholder="Confirm Password" required/>
            </div>
 
            <div className={styles.formActions}>
                <button className={styles.resetformBtn} type="submit">Send Request</button>
            </div>
        </form>
        </div>
    );
}
 
export default Resetpassword;