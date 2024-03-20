import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button
        className={styles.optionBtn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.optionBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.optionBtn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={styles.resetBtn}
          onClick={() => updateFeedback("reset")}
        >
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
