import React from 'react';
import {Image, Table} from 'react-bootstrap';
import {MDBTableBody} from 'mdbreact';
import '../styles/ScrollTable.css'

import {glasses} from '../resource'

class GlassesSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            glassesCallback: props.glassesCallback
        }
    }

    render() {
        let rows = [];
        glasses.forEach((item, index)=>{
            rows.push({'handle':
                <Image src={item} onClick={() => {this.state.glassesCallback(index)}} fluid />
            });
        })
        return (
            <Table className='table-scroll-y'>
                <MDBTableBody rows={rows}/>
            </Table>
        )
    }
}

export default GlassesSelector
