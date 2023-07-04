import { connect } from 'react-redux'
import Listing from '../components/Listing'
import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listing: state.listing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (index) => dispatch(removeListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
