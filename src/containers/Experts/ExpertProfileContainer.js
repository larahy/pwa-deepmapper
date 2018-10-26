import { connect } from 'react-redux'
import {filter} from 'lodash'
import {getExperts} from '../../selectors/experts'
import ExpertProfile from '../../components/Experts/ExpertProfile'

export const mapStateToProps = (state, ownProps) => {
    const allExperts = getExperts(state)
    const expert = filter(allExperts, expert => {
        return expert.id === ownProps.id
    } )
    if (expert !== undefined) {
        return {
            expert: expert[0],
        }
    } else {
        return {
            expert: undefined,
        }
    }
}

const ExpertProfileContainer = connect(
    mapStateToProps,
)(ExpertProfile)

export default ExpertProfileContainer
