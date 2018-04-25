import React from "react";

const Link=({link,clickEvent,filter,children})=>{
    return (<span style={{color:link==filter?"#006bff":"#333"}} onClick={()=>clickEvent(link)}>{children}</span>);
};

let Footer=({filter,filterChange})=>{
    return (
        <div>
            filter: {` `}<Link clickEvent={filterChange} filter={filter} link="SHOW_ALL">ALL</Link>
                    {` `}<Link clickEvent={filterChange} filter={filter} link="SHOW_COMPLETED">COMPLETED</Link>
                    {` `}<Link clickEvent={filterChange} filter={filter} link="SHOW_ACTIVE">ACTIVE</Link>
        </div>
    );
};

export default Footer;