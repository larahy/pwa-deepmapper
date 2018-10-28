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
        const {currentView} = this.props

        const publishedElementClasses = currentView === 'published' ? 'is-active' : ''
        const draftElementClasses = currentView === 'draft' ? 'is-active' : ''

        return (
            <Fragment>

                <div className="tabs is-toggle">
                    <ul>
                        <li className={publishedElementClasses}>
                            <a onClick={() => this.toggleOn('published')}>
                                PUBLISHED
                            </a>
                        </li>
                        <li className={draftElementClasses}>
                            <a onClick={() => this.toggleOn('draft')}>
                                DRAFT
                            </a>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}


