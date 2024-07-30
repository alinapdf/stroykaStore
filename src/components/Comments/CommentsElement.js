import com1 from "./../../img/comments/com11.png";
import quoters from "./../../img/comments/quoters.svg";
import "./Comments.scss";
const CommentsElement = (props) => {
  return (
    <>
      <li className="comments-list-element">
        <div className="comments-list-element-top-part">
          <div className="comments-list-element-top-part-user">
            <div className="comments-list-element-top-part-user-avatar">
              <img src={props.avatar} alt={props.alt} />
            </div>
            <div className="comments-list-element-top-part-user-name">
              {props.name}
            </div>
          </div>
          <div className="comments-list-element-top-part-quoters">
            <img src={quoters} alt="quoters" />
          </div>
        </div>
        <div className="comments-list-element-info">
          <p className="comments-list-element-info-text">{props.text}</p>
          <p className="comments-list-element-info-date">{props.date}</p>
        </div>
      </li>
    </>
  );
};

export default CommentsElement;
