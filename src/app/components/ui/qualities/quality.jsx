import React from "react";
import PropTypes from "prop-types";
import { useQuality } from "../../../hooks/useQualities";

const Qualitie = ({ id }) => {
    const { isLoading, getQuality } = useQuality();
    const qual = getQuality(id);
    if (!isLoading) {
        return <span className={"badge bg-" + qual.color}>{qual.name}</span>;
    } else return "Loading";
};

Qualitie.propTypes = {
    id: PropTypes.string
};
export default Qualitie;
