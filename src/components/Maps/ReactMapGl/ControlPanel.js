import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'

class ControlPanel extends PureComponent {
    render() {
        const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

        const Container = this.props.containerComponent || defaultContainer;
        return (
            <Container>
                <div className="source-link">
                    <a href="https://github.com/uber/react-map-gl/tree/3.2-release/examples/controls" target="_new">View Code ↗</a>
                </div>
            </Container>
        );
    }
}


ControlPanel.propTypes = {
    children: PropTypes.array,
    containerComponent: PropTypes.object
}

export default ControlPanel;