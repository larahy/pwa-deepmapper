import React, {Fragment} from 'react';
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {Headers} from '../constants/attributes'

const AboutPage = () => (
    <Fragment>
        <SimpleHeader title={Headers.ABOUT}/>

        <section className="hero is-info is-medium is-bold">
            <div className="hero-body about-page">
                <div className="container has-text-centered">
                    <p className="title is-2">Inner Geography</p>
                    <p className="subtitle is-4">Deepmapper is a tool that allows a city's inhabitants to create and maintain a deep map - a navigable cultural map of the city populated with unique user-generated 'placecasts' - short, place-specific podcasts.</p>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h2 className="subtitle">Each city's community of deepmappers will be made up of citizens who are passionate about their city's history, architecture, politics, art, literature and local lore - both professionally (scholars, writers) and as amateurs.</h2>
                <h2 className="subtitle">Deepmappers maintain the quality of their deep map through a democratic process of voting - each submitted placecast must be majority-voted by the rest of the city's deepmappers. This system will also ensure diversity of content, subject-matter and perspectives.</h2>
                <h2 className="subtitle">Each city's deep map will be enjoyed by visitors and citizens alike. It is a unique map of the city’s ‘inner geography’ – the stories, knowledge, observations and alternative perspectives that pervade all places. This human dimension of the city has so far been locked up inside the minds of its citizens. Deepmapper makes it publicly accessible for the first time.</h2>
                <h2 className="subtitle">Launching in Autumn 2018, Deepmapper exemplifies technology at its most positive and important.</h2>
            </div>
        </section>
    </Fragment>
)

export {AboutPage};