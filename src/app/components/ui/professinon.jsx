import PropTypes from "prop-types";
import React, { useProfessions } from "../../hooks/useProfession";

const Profession = ({ id }) => {
    console.log(id);
    const { isLoading, getProfession } = useProfessions();
    const prof = getProfession(id);
    console.log(prof.name);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "loading...";
};

Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
