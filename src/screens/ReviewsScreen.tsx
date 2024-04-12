import React from 'react'
import './../css/Reviews.css'
import PageDesigner from '../components/PageDesigner/PageDesigner'
import ReviewsMap from '../components/ReviewsMap'

const ReviewsScreen = () => {
  return (
    <div className=' Reviews'>
    
        <div className="leave-feedback color_lv_1-2">
        Уважаемые посетители нашего сайта! Чтобы разместить на данной странице Ваш отзыв, отправьте сообщение нам на электронный адрес info@guzkod.ru(в теме письма укажите «Благодарность»)
        </div>
        <div>
          <ReviewsMap/>
        </div>
        <PageDesigner/>
    </div>
  )
}

export default ReviewsScreen