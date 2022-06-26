import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader
    className="pizzaLoader"
    speed={1}
    width={270}
    height={470}
    viewBox="0 0 270 460"
    backgroundColor="#F9F9F9"
    foregroundColor="#eeeeee"
    {...props}
  >
    <circle cx="135" cy="150" r="113" />
    <rect x="15" y="290" rx="10" ry="10" width="240" height="24" />
    <rect x="0" y="325" rx="10" ry="10" width="270" height="88" />
    <rect x="12" y="430" rx="10" ry="10" width="68" height="22" />
    <rect x="112" y="420" rx="20" ry="20" width="147" height="37" />
  </ContentLoader>
)

export default Loader