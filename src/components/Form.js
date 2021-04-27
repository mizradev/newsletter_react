import React from 'react'

function Form({Function, children, classes}) {
    return (
        <form
            onSubmit={Function}
            className={classes}
        >
            {children}
        </form>
    );
}

export default Form;
