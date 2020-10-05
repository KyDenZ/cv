import { Chip } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { jobStyle } from 'assets/styles/components/job';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export interface TimelineProps { }

export const TimelineJob: React.FC<TimelineProps> = ({ children, ...rest }) => {
    const classes = jobStyle();

    return (
        <VerticalTimeline layout="1-column" animate={false}>
            {personalInfos.jobs.map((job, i) => (
                <VerticalTimelineElement
                    date={job.date}
                    position="right"
                    key={i}
                >
                    <h3 className="vertical-timeline-element-title">{job.job}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{job.place}</h4>
                    <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                    <div className={classes.chips}>
                        {job.technologies.map((technology, iT) => (
                            <Chip size="small" color="secondary" label={technology} key={iT} className={classes.chip}></Chip>
                        ))}</div>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};
