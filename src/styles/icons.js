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
  FaCheck,
  FaUsers,
  FaRegAddressBook,
} from 'react-icons/fa';
import colors from './colors';
import metrics from './metrics';

const UserIcon = styled(FaUserAlt)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const EyeOpenIcon = styled(FaEye)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const EyeClosedIcon = styled(FaEyeSlash)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserPlusIcon = styled(FaUserPlus)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserForgotPassword = styled(FaUserLock)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const BackIcon = styled(FaBackspace)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const EmailIcon = styled(FaRegEnvelope)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const PhoneIcon = styled(FaPhone)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const CorrectIcon = styled(FaCheck)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserListIcon = styled(FaUsers)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserContactIcon = styled(FaRegAddressBook)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
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
  CorrectIcon,
  UserListIcon,
  UserContactIcon,
};
