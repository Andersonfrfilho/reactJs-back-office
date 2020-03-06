import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AreaUserList } from './styles';
import * as LoginActions from '../../store/modules/login/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';

export default function Content2() {
  return <AreaUserList />;
}
