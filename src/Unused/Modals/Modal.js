import React from 'react'
import PropTypes from 'prop-types'

export default class Modal extends React.Component {

    static defaultProps = {
        openModalElement: () => {
        },
        closeModalElement: () => {
        },
    }

    constructor() {
        super()
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.state = {
            modalOpen: false,
        }
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }

    handleModalOpen(event) {
        this.toggleModal()
        event.preventDefault()
    }

    handleModalClose(event) {
        this.toggleModal()
        event.preventDefault()
    }

    render() {
        const modalClasses = this.state.modalOpen ? 'modal is-active' : 'modal'

        return (
            <div>
                {this.props.openModalElement(this.handleModalOpen)}
                <div className={modalClasses}>
                    <div className="modal-background" onClick={event => this.handleModalClose(event)}></div>
                    <div className="modal-content">
                        {this.props.children}
                        {this.props.closeModalElement(this.handleModalClose)}
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    openModalElement: PropTypes.func,
    closeModalElement: PropTypes.func,
    children: PropTypes.object
}
