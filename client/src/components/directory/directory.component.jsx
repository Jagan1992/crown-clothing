import React from "react";
import { connect } from "react-redux";
import { selectdirectoryItems } from "../../reducer/directory-reducer/directory.selectors";
import { createStructuredSelector } from "reselect";
import Menu from "../menu-item/meni-item.component";
import "./directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <Menu
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectdirectoryItems,
});

export default connect(mapStateToProps, null)(Directory);
