import PropTypes from "prop-types";

interface UserProfileProps {
  name: string;
  age: number | null; // null được chấp nhận
  favouriteColors: string[];
  isAvailable: boolean;
}
export default function UserProfile({
  name = "",
  age = null,
  favouriteColors = [],
  isAvailable = false,
}: UserProfileProps) {
  return (
    <>
      <div>
        <div>My name is {name}!</div>
        <div>My age is {age}!</div>
        <div>My favourite colors are {favouriteColors.join(", ")}!</div>
        <div>I am {isAvailable ? "available" : "not available"}</div>
      </div>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAvailable: PropTypes.bool.isRequired,
};
