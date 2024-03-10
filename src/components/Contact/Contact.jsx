import css from "./Contact.module.css"
import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = ({name, number,id, onDelete}) => { 
    
    return (
        
        <div className={css.contactInform}>
            
            <div className={css.contactCard}>
                <BsFillPersonFill className={css.contactIcon} />
                <p>{name}</p>
            </div>
            
            <div className={css.contactCard}>
                <AiFillPhone className={css.contactIcon}/>
                <p>{number} </p>
            </div>   
            
            <button className={css.btnDelete} type ="submit" onClick={()=> onDelete(id)}>Delete</button>
           
            </div>
            
)
}

export default Contact;