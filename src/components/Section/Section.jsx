import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
    return(
        <SectionWrapper>
            { title && <SectionTitle>{ title }</SectionTitle>}
            { children }
        </SectionWrapper>
    )
}

Section.ropTypes = {
    title: PropTypes.string,
}    