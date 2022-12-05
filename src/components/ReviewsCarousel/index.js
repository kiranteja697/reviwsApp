/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable react/no-unknown-property */
import {Component} from 'react'

const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const rightArrow =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  decrease = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState - 1}))
    }
  }

  increase = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const review = reviewsList[index]
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Reviews</h1>
          <div className="main">
            <img src={imgUrl} alt={username} />
            <div className="btn-container">
              <button
                className="btn"
                type="button"
                testid="leftArrow"
                onClick={this.decrease}
              >
                <img src={leftArrow} alt="left arrow" />
              </button>
              <p>{username}</p>
              <button
                className="btn"
                type="button"
                testid="rightArrow"
                onClick={this.increase}
              >
                <img src={rightArrow} alt="right arrow" />
              </button>
            </div>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="reviewDescription">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
