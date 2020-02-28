import React from 'react';
import {Image, Button, Table} from 'react-bootstrap';
import {MDBTableBody} from 'mdbreact';
import './FaceSelector.css'

import {faces} from '../images'


class FaceSelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            faceCallback: props.faceCallback
        }
    }

    render() {
        let rows = [];
        faces.forEach((item, index, __)=>{
            rows.push({'handle': 
            <Button onClick={() => {this.state.faceCallback(index)}}>
                <Image src={item} fluid />
            </Button>
            });
        })
        return (
            <Table className='table-scroll-y'>
                <MDBTableBody rows={rows}/>
            </Table>
        )
    }
}

export default FaceSelector