import ItemDetail from './item_detail'
import {connect} from 'react-redux'
import {selectItem} from '../../reducers/selectors'

const mSTP = (state, ownProps) => {
    debugger
    return ({
        item: selectItem(state, ownProps.match.params.id)
    })
}

export default connect(mSTP)(ItemDetail)