import React, { Component } from "react"
import { Card, Tag, Elevation } from "@blueprintjs/core"
import PropTypes from "prop-types"
import classnames from "classnames/bind"
import moment from "moment"

import style from "./entry.less"
import config from "../../config";

const cx = classnames.bind(style)

class Entry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isImgHover: false,
      isDetailsHover: false
    }
  }

  render () {
    const {
      title, release_date, poster_path, genres, overview
    } = this.props
    const date = release_date ? moment(
      release_date, config.apiDateFormat
    ).format(
        config.displayDateFormat
    ) : null
    const expanded = !poster_path || this.state.isImgHover || this.state.isDetailsHover
    return (
      <Card
        interactive={true}
        elevation={Elevation.ONE}
        className={cx("container")}>
          <div className={cx("wrapper")}>
            <div
              className={cx("details", {
                expanded,
                "no-poster": !poster_path
              })}
              onMouseEnter={() => this.setState({ isDetailsHover: true })}
              onMouseLeave={() => this.setState({ isDetailsHover: false })}>
                <div className={cx("detail", "pt-ui-text-large")}>{ title }</div>
                <div className={cx("detail")}>{ date }</div>
                <div className={cx("detail")}>{
                  genres.map(genre => (
                    <Tag minimal key={genre} className={cx("genre")}>
                      { genre }
                    </Tag>
                  ))
                }</div>
                <div className={cx("detail")}>
                  <blockquote>
                    { overview }
                  </blockquote>
                </div>
            </div>
            {
              poster_path &&
              <img
                className={cx("poster", { expanded })}
                src={poster_path}
                onMouseEnter={() => this.setState({ isImgHover: true })}
                onMouseLeave={() => this.setState({ isImgHover: false })}/>
            }
          </div>
      </Card>
    )
  }
}

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  overview: PropTypes.string
}

Entry.displayName = "UI/SearchResults/Entry"

export default Entry
