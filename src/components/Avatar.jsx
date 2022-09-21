import React from 'react'
import avatar from "../../src/images/image-avatar.png";

const Avatar = ({author}) => {
  return (
    <div>
        <img className='avatar' src={avatar} alt={'Avatar'}/>
        <p>Creation of <span className='petitParagraph3'>{author}</span> </p>
    </div>
  )
}

export default Avatar
