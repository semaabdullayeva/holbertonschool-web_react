import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';


const CourseList = ({ courses }) => {
    return ( 
        <table id= "CourseList" className={css(styles.CourseList)}>
            <thead>
                <CourseListRow textFirstCell="Available courses"  isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
            {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
            ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired,
      })
    ),
  };
  
CourseList.defaultProps = {
courses: [],
};

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    border: '1px solid #ddd',
    margin: '20px 0',
    textAlign: 'left',
    borderCollapse: 'collapse',
  },

  CourseListThTd: {
    border: '1px solid #ddd',
    padding: '8px',
  },

  CourseListHeader: {
    backgroundColor: '#f4f4f4',
  },
});


export default WithLogging(CourseList);