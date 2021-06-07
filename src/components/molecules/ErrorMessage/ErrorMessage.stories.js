import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 100vh;
  overflow: hidden !important;
`;

export default {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};
