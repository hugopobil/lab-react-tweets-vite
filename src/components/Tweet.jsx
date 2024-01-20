import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      
      <ProfileImage src={props.tweetsArray.user.image} alt={props.tweetsArray.user.name} />

      <div className="body">
        <div className="top">
          <User user={props.tweetsArray.user} />
          <Timestamp time={props.tweetsArray.timestamp} />
        </div>

        <Message message={props.tweetsArray.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
