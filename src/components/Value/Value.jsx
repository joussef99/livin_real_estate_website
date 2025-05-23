import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="felxCenter innerWidth paddings v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value" />
          </div>
        </div>

        {/* right side */}
        <div className="v-right flexColStart">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give you</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpandeds={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
                const [className , setClassName] = React.useState(null)
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default Value;
