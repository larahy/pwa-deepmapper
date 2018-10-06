import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import '../login.scss'

class LoginPage extends React.Component {
    render() {
        return (
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Login</h3>
                            <p className="subtitle has-text-grey">Please login to proceed.</p>
                            <div className="box">
                                <form>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large" type="email" placeholder="Your Email" autoFocus=""/>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large" type="password" placeholder="Your Password"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox"/>
                                            Remember me
                                        </label>
                                    </div>
                                    <button className="button is-block is-info is-large is-fullwidth">Login</button>
                                </form>
                            </div>
                            <p className="has-text-grey">
                                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                <a href="../">Need Help?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

LoginPage.propTypes = {
    onRequestLogin: PropTypes.func,
}

// const mapStateToProps = state => {
//     return {};
// };

const mapDispatchToProps = dispatch => {
    return {
        onRequestLogin: () => dispatch({type: 'LOGIN_REQUESTED'}),
    };
};

export default connect(mapDispatchToProps)(LoginPage);
