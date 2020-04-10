import styled from 'styled-components';
import {
  FaUserAlt,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
  FaUserLock,
  FaBackspace,
  FaRegEnvelope,
  FaPhone,
} from 'react-icons/fa';
import colors from './colors';

const UserIcon = styled(FaUserAlt)`
  color: ${colors.pickerTwo};
`;
const EyeOpenIcon = styled(FaEye)`
  color: ${colors.pickerTwo};
`;
const EyeClosedIcon = styled(FaEyeSlash)`
  color: ${colors.pickerTwo};
`;
const UserPlusIcon = styled(FaUserPlus)`
  color: ${colors.pickerTwo};
`;
const UserForgotPassword = styled(FaUserLock)`
  color: ${colors.pickerTwo};
`;
const BackIcon = styled(FaBackspace)`
  color: ${colors.pickerTwo};
`;
const EmailIcon = styled(FaRegEnvelope)`
  color: ${colors.pickerTwo};
`;
const PhoneIcon = styled(FaPhone)`
  color: ${colors.pickerTwo};
`;
export default {
  UserIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  UserPlusIcon,
  UserForgotPassword,
  BackIcon,
  EmailIcon,
  PhoneIcon,
};
