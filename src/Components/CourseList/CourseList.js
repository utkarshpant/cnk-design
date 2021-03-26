import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CourseCard from '../CourseCard/CourseCard';


class CourseList extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="CourseList w-full my-4">
                <h1 className="font-baloo text-2xl font-semibold block w-full">
                    Courses
                </h1>
                <div className="CourseListContents">
                    <Tabs>
                        <TabList style={{
                            margin: "10px 0px 10px 0px"
                        }}>
                            <Tab>
                                All courses
                            </Tab>
                            <Tab>
                                The newest
                            </Tab>
                            <Tab>
                                Top rated
                            </Tab>
                            <Tab>
                                Most popular
                            </Tab>
                        </TabList>

                        <TabPanel>
                            {
                                this.props.courses.map((course, index) => (
                                    <CourseCard course={course} />
                                ))
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                this.props.courses.slice().sort((a, b) => { return a.rating - b.rating }).map((course, index) => (
                                    <CourseCard course={course} />
                                ))
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                this.props.courses.slice().sort((a, b) => { return b.rating - a.rating }).map((course, index) => (
                                    <CourseCard course={course} />
                                ))
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                this.props.courses.slice().sort((a, b) => { return a.rating - b.rating }).map((course, index) => (
                                    <CourseCard course={course} />
                                ))
                            }
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
};

export default CourseList;