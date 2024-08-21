// src/Experience.js
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls1, controls2, inView1, inView2]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="bg-[#141414] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#141414",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #141414" }}
            date="January 2020 - Present"
            iconStyle={{ background: "#141414", color: "#fff" }}
          >
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white">
                Tech Corp
              </h4>
              <ul className="list-disc pl-5 space-y-2 font-josefin text-neutral-400">
                <li>
                  Developed and maintained web applications using React and
                  Node.js.
                </li>
                <li>
                  Collaborated with cross-functional teams to define, design,
                  and ship new features.
                </li>
                <li>
                  Conducted code reviews and contributed to the improvement of
                  coding standards.
                </li>
              </ul>
            </motion.div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#141414",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #141414" }}
            date="June 2018 - December 2019"
            iconStyle={{ background: "#141414", color: "#fff" }}
          >
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={controls2}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                Junior Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-400">
                Startup Inc
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Assisted in the development of new features and bug fixes.
                </li>
                <li>
                  Worked on improving the performance of existing applications.
                </li>
                <li>
                  Participated in team meetings and provided input on project
                  planning.
                </li>
              </ul>
            </motion.div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#141414",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #141414" }}
            date="June 2018 - December 2019"
            iconStyle={{ background: "#141414", color: "#fff" }}
          >
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={controls2}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                Junior Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-400">
                Startup Inc
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Assisted in the development of new features and bug fixes.
                </li>
                <li>
                  Worked on improving the performance of existing applications.
                </li>
                <li>
                  Participated in team meetings and provided input on project
                  planning.
                </li>
              </ul>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
