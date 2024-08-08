import PropTypes from "prop-types";
import cssProfile from './Profile.module.css'


export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div className={cssProfile.profile}>
      <div className={cssProfile.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={cssProfile.avatar}
        />
        <p className={cssProfile.name}>{username}</p>
        <p className={cssProfile.tag}>@{tag}</p>
        <p className={cssProfile.location}>{location}</p>
      </div>

      <ul className={cssProfile.stats}>
        <li>
          <span className={cssProfile.label}>Followers</span>
          <span className={cssProfile.quantity}>{stats.followers}</span>
       </li>
        <li>
          <span className={cssProfile.label}>Views</span>
          <span className={cssProfile.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={cssProfile.label}>Likes</span>
          <span className={cssProfile.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}
