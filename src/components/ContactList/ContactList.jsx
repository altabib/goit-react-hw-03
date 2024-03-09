import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ filterContacts, onDelete }) => { 

    return (
        <ul className={css.ulList}>
            {filterContacts.map((item) => (
            <li className={css.itemList} key={item.id}>
            <Contact {...item} onDelete={onDelete} />
        </li>
      ))}
        </ul>
)
}

export default ContactList;