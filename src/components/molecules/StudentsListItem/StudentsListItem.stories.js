import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const NoGrades = Template.bind({});
NoGrades.args = {
  userData: {
    name: 'Łukasz Tymiński',
    attendance: '55%',
    average: '',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Łukasz Sraczynski',
    attendance: '55%',
    average: '2.0',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Łukasz Tymiński',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Łukasz Tymiński',
    attendance: '55%',
    average: '5.0',
  },
};
