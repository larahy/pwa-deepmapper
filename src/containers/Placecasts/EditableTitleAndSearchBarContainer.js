import {connect} from 'react-redux'
import TitleAndSearchBar from '../../components/Placecasts/TitleAndSearchBar'

export const mapStateToProps = (_, ownProps) => {
    return  {
        ...ownProps,
    }
}

const EditableTitleAndSearchBarContainer = connect(
    mapStateToProps,
)(TitleAndSearchBar)

export default EditableTitleAndSearchBarContainer
