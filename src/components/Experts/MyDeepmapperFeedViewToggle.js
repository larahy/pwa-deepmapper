import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

export default class MyDeepmapperFeedViewToggle extends Component {

    static propTypes = {
        currentView: PropTypes.string,
        changeMyDeepmapperFeedViewTo: PropTypes.func,
    }

    constructor(props) {
        super(props)
    }

    toggleOn(view) {
        return this.props.changeMyDeepmapperFeedViewTo(view)
    }

    render() {
        const { currentView } = this.props
        
        const publishedElementClasses = currentView === 'published' ? 'tab-toggle' : '';
        const draftElementClasses = currentView === 'draft' ? 'tab-toggle' : '';

        return (
            <Fragment>
                <ul className='view-toggle'>
                    <li className={`published-toggle ${publishedElementClasses}`}>
                        <p onClick={() => this.toggleOn('published')}>PUBLISHED</p>
                    </li>
                    <li className={`draft-toggle ${draftElementClasses}`}>
                        <p onClick={() => this.toggleOn('draft')}>DRAFT</p>
                    </li>
                </ul>
            </Fragment>
        );
    }
}
