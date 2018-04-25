import React from "react";
import {connect} from "react-redux";

import {changeFilter} from "../redux/actions";
import Footer from "../component/Footer";

function mapStateToProps(state){
    return {
        filter:state.filter
    };
}
function mapDispatchToProps(dispatch){
    return {
        filterChange:function(filter){
            dispatch(changeFilter(filter));
        }
    }
}

const FooterLink=connect(mapStateToProps,mapDispatchToProps)(Footer);

export default FooterLink;