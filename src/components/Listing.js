import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import cookie from 'cookie'
import { Link } from 'react-router-dom'

// import Listing from '../containers/Listing'


// import add from '../components/add'
// import { red } from '@mui/material/colors'
import AddListing from '../containers/AddListing'
 
const Listing = (props) => {

    const cookies = cookie.parse(document.cookie);

    console.log(props)
    return (
        <Container maxWidth="lg" className="car-container">
            {cookies.loggedIn ? <h4>Welcome, {props.user}</h4> : null}

            <div className="flex-container">
                {/* <Chart /> */}
                {/* <Total /> */}
                {cookies.loggedIn ? <AddListing listingTotal={props.listing.length} /> : null}
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {cookies.loggedIn ? <TableCell>Delete</TableCell> : null}
                        {/* {cookies.loggedIn ? <TableCell>Add</TableCell> : null} */}
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listing.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            {listing.id}
                        </TableCell>
                        <TableCell>
                        <Link to={`/details/${listing.id}`}>{listing["name"]}</Link>
                            
                        </TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                        <TableCell>
                        {cookies.loggedIn ? <DeleteIcon
                                style={{cursor: 'pointer', color: 'red', fontSize: 'medium'}}
                                // add onClick method here
                                onClick={() => props.removeListing(idx)}
                                className="icon text-red" /> : null }
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing