import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const inputEl = useRef("");
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <>
      <h2 style={{ marginTop: "3rem" }}>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </>
  );
}

export default ContactList;
