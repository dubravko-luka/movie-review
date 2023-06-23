import { ChangeEvent, memo, useEffect, useRef, useState } from "react"
import styles from './styles.module.css'

const QandA: React.FC = () => {

  const comments = [
    {
      author: 'Chiêu',
      text: 'xin tên bộ có thế giới fantasy (ko có chuyển sinh) mà vừa vào đã đánh nhau đấu kiếm, lâu quá rồi nên quên tên',
      avatar: '/example/chieu.png',
      replies: [
        {
          author: "Chiêu",
          text: "orient",
          avatar: '/example/chieu.png',
        }
      ]
    },
    {
      author: "Chiêu",
      text: "Cowboy Bebop có hay ko ae?",
      avatar: '/example/chieu.png',
    },
    {
      author: 'Phương',
      text: 'xin name mấy bộ art đẹp nd hay vd như SAO tinh linh huyễn tưởng ký thất nghiệp chuyển sinh ......',
      avatar: '/example/phuong.jpg',
      replies: [
        {
          author: 'Chiêu',
          text: 'no game no life, stein gate, dantalian no shoka,đóa hoa ngày ấy ta chưa biết tên, saenai heroine, nier automata,clb những kẻ mất ngủ, my hero home,silent voice',
          avatar: '/example/chieu.png'
        },
        {
          author: 'Phương',
          text: 'fate =v art khá đc',
          avatar: '/example/phuong.jpg'
        },
      ]
    },
    {
      author: 'Chiêu',
      text: 'xin tên bộ có thế giới fantasy (ko có chuyển sinh) mà vừa vào đã đánh nhau đấu kiếm, lâu quá rồi nên quên tên',
      avatar: '/example/chieu.png',
      replies: [
        {
          author: "Chiêu",
          text: "orient",
          avatar: '/example/chieu.png',
        }
      ]
    },
    {
      author: "Chiêu",
      text: "Cowboy Bebop có hay ko ae?",
      avatar: '/example/chieu.png',
    },
    {
      author: 'Phương',
      text: 'xin name mấy bộ art đẹp nd hay vd như SAO tinh linh huyễn tưởng ký thất nghiệp chuyển sinh ......',
      avatar: '/example/phuong.jpg',
      replies: [
        {
          author: 'Chiêu',
          text: 'no game no life, stein gate, dantalian no shoka,đóa hoa ngày ấy ta chưa biết tên, saenai heroine, nier automata,clb những kẻ mất ngủ, my hero home,silent voice',
          avatar: '/example/chieu.png'
        },
        {
          author: 'Phương',
          text: 'fate =v art khá đc',
          avatar: '/example/phuong.jpg'
        },
      ]
    },
  ];

  const inputCommentRef = useRef<HTMLTextAreaElement>(null);

  const [textInputComment, setTextInputComment] = useState("")

  useEffect(() => {
    adjustInputCommentHeight();
  }, []);

  const adjustInputCommentHeight = () => {
    if (inputCommentRef.current) {
      const inputComment = inputCommentRef.current;
      inputComment.style.height = 'auto';
      inputComment.style.height = inputComment.scrollHeight + 'px';
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInputComment(event.target.value);
    adjustInputCommentHeight();
  };

  return (
    <>
      <div className="main mb-10">
        <div className={`${styles.title} text-white py-3 mb-3 border-b border-bd-255`}>
          <p>Hỏi / Đáp</p>
        </div>
        <div className={`${styles.enterComment} mb-2`}>
          <textarea value={textInputComment} onChange={handleChange} rows={1} ref={inputCommentRef} className={`${styles.inputComment}`} placeholder="Viết bình luận..." />
          <div className={`${styles.buttonSubmitComment} ${textInputComment ? styles.buttonSubmitCommentShow : ''}`}>Đăng</div>
        </div>
        <div className={`${styles.commentList} mt-5 border-b border-bd-255 pb-10 pr-3`}>
          {comments.map((comment, index) => (
            <div className={`${styles.commentItem} border-b border-bd-255 last:border-b-0`} key={index}>

              <div className={styles.avatar}>
                <img className={styles.imgAvatar} src={comment.avatar} alt="Avatar" />
              </div>
              <div className={styles.comment}>
                <div className={styles.author}>{comment.author}</div>
                <div className={styles.text}>{comment.text}</div>

                {comment.replies && comment.replies.length > 0 && (
                  <div className={styles.replyList}>
                    {comment?.replies?.map((reply, replyIndex) => (
                      <div className={styles.replyItem} key={replyIndex}>
                        <div className={styles.avatar}>
                          <img className={styles.imgAvatar} src={reply?.avatar} alt="Avatar" />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.author}>{reply?.author}</div>
                          <div className={styles.text}>{reply?.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(QandA)