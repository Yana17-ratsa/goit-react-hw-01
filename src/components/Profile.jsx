import PropTypes from 'prop-types';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className="container">
        <div>
          <img src={image} alt={name} />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <ul>
          <li>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Profile;
