import PropTypes from "prop-types";

interface AnswerButtonProps {
  onYes: () => void;
  onNo: () => void;
}

export default function AnswerButton({ onYes, onNo }: AnswerButtonProps) {
  return (
    <>
      <button className="border cursor-pointer mr-5" onClick={onYes}>
        YES
      </button>

      <button className="border cursor-pointer" onClick={onNo}>
        NO
      </button>
    </>
  );
}

AnswerButton.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func,
};
