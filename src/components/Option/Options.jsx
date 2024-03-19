import PropTypes from "prop-types";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className="options">
      <button className="option-btn" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className="option-btn" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className="option-btn" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className="reset-btn" onClick={() => updateFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
