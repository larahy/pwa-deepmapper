import React, {Fragment} from 'react'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'
import BecomeADeepmapperFormContainer from '../containers/Experts/BecomeADeepmapperFormContainer'

export default class BecomeADeepmapperPage extends React.Component {
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
                    title={Headers.BECOME_A_DEEPMAPPER}
                    isSticky={this.state.isMenuSticky}
                />
                <section 
                    className="section" 
                    style={{ borderTop: '1px solid #a9a9a9' }}
                >
                    <div className="container">
                        <div className="content">
                            <p>Are you a scholar, working in any field? Are you a published writer, in any genre? Or do
                                you
                                have
                                a unique story to tell about a specific place? We welcome you to apply to become a
                                Deepmapper
                                and start publishing placecasts.</p>
                            <br/>
                            <p>Fill in the fields below, and we’ll review your application. We’ll get back to you within
                                48
                                hours by email - do ensure Deepmapper emails don’t go to your junk folder.</p>
                            <br/>
                            <p>Be sure to be accurate: what you write now becomes the basis for your Deepmapper public
                                profile
                                (though you’ll be able to edit at a later date). </p>
                            <br/>
                            <p>For the Bio section, summarise your experience, expertise and interests. Think of it as
                                the
                                way
                                the user will get to know you. The Bio will be attached to every placecast you publish.
                                Feel
                                free to include links: to webpages or to your social media profiles. Please never
                                include
                                commercial links. Deepmapper is a non-commercial space.</p>
                            <br/>
                            <p>Thank you for your interest in Deepmapper. We very much look forward to hearing from
                                you.</p>
                        </div>
                    </div>
                </section>

                <BecomeADeepmapperFormContainer/>
            </Fragment>
        )
    }
}
