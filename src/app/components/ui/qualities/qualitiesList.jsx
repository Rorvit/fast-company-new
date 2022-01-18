import React from "react";
import Qualitie from "./quality";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Qualitie key={qual} id={qual} />
            ))}
        </>
    );
};

export default QualitiesList;

QualitiesList.propTypes = {
    qualities: PropTypes.array
};
