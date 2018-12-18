import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => { // instead of (props), we destructure ninjas of props here
    // so the line below is no longer needed
    // const { ninjas } = props; // same as const ninjas = this.props.ninjas - destructuring
    
    return (
        <div className="ninja-list">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ ninja.id }>
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>
                            <div>Belt: { ninja.belt }</div>
                            <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}

export default Ninjas