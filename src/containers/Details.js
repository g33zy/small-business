import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
    return {
       
        listing: state.listing
    }
}

export default connect(mapStateToProps)(Details)
