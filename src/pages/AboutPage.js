import React, { Component, Fragment } from 'react';
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'

export default class AboutPage extends Component {
    state = {
        isMenuSticky: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { isMenuSticky } = this.state;

        if (window.scrollY >= 52 && !isMenuSticky) {
            this.setState({ isMenuSticky: true });
        }

        if (window.scrollY <= 52 && isMenuSticky) {
            this.setState({ isMenuSticky: false });
        }
    }

    render() {
        return (
            <Fragment>
                <SimpleHeader 
                    title={Headers.ABOUT}
                    isSticky={this.state.isMenuSticky}
                />

                <section className="hero is-info is-medium is-bold">
                    <div className="hero-body about-page">
                        <div className="container has-text-centered about-copy">
                            <p className="subtitle is-4">Deepmapper is a podcast platform with a difference. Our podcasts are short (only a few minutes each) and place-specific (each one has GPS coordinates attached to it). We call them “placecasts”.</p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container about-copy">
                        <h2 className="subtitle">Using Deepmapper, researchers, writers and storytellers can attach their narratives directly onto individual objects in the real world. For our users, those places are then transfigured by those narratives - whether they’re stories, local histories, architectural explanations, rare facts, original ideas, or full-blown poetic visions.</h2>
                        <h2 className="subtitle">Placecasts are powerful. In aggregate, they have the power to change how the world actually appears to us. And when the world changes, we change.</h2>
                        <h2 className="subtitle">This power therefore brings with it responsibility. Our platform aims to represent the whole - though rapidly thinning - spectrum of worldviews, cultures, languages, dialects and unique personal visions (even the really weird ones). Homogeneity, monoculture and groupthink is spreading across the world at an accelerating rate. We set up Deepmapper in order to counter that force. </h2>
                        <h2 className="subtitle">Ultimately, there are as many ways of seeing the world as there are people. Deepmapper aims to make available to all as many of those individual points of view as possible. Deepmapper is an ark for the full diversity of human narrative and vision.</h2>
                    </div>
                </section>
            </Fragment>
        );
    }
}