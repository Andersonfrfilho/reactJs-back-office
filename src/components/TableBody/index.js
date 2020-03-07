import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaTable,
  Column,
  Row,
  AreaActionsIcons,
  AreaIcons,
  AreaInfo,
  Info,
  IconEdit,
  IconDelete,
  IconSquareUnselect,
  IconSquareAllSelect,
  IconFilter,
} from './styles';

export default function TableBody({ infoTable }) {
  return (
    <AreaTable>
      <Row key="index">
        <Column flex={2}>
          <AreaIcons>
            <IconSquareUnselect />
          </AreaIcons>
          <AreaInfo align="center">
            <Info>Ações</Info>
          </AreaInfo>
          <AreaIcons />
        </Column>
        <Column flex={1}>
          <IconFilter />
          <AreaInfo>
            <Info>{infoTable[0].id}</Info>
          </AreaInfo>
        </Column>
        <Column flex={2}>
          <AreaInfo>
            <Info>{infoTable[0].name}</Info>
          </AreaInfo>
        </Column>
        <Column flex={3}>
          <AreaInfo>
            <Info>{infoTable[0].email}</Info>
          </AreaInfo>
        </Column>
        <Column flex={2}>
          <AreaInfo>
            <Info>{infoTable[0].fone}</Info>
          </AreaInfo>
        </Column>
        <Column flex={2}>
          <AreaInfo>
            <Info>{infoTable[0].date}</Info>
          </AreaInfo>
        </Column>
      </Row>
      {infoTable.map((element, index) => {
        const { id, name, email, fone, date } = element;
        if (index !== 0) {
          return (
            <Row key={index.toString()}>
              <Column flex={2}>
                <AreaActionsIcons>
                  <AreaIcons>
                    <IconSquareUnselect />
                  </AreaIcons>
                  <AreaIcons>
                    <IconEdit />
                  </AreaIcons>
                  <AreaIcons>
                    <IconDelete />
                  </AreaIcons>
                </AreaActionsIcons>
              </Column>
              <Column flex={1}>
                <AreaInfo align="center">
                  <Info>{id}</Info>
                </AreaInfo>
              </Column>
              <Column flex={2}>
                <AreaTable>
                  <Info>{name}</Info>
                </AreaTable>
              </Column>
              <Column flex={3}>
                <AreaTable>
                  <Info>{email}</Info>
                </AreaTable>
              </Column>
              <Column flex={2}>
                <AreaTable>
                  <Info>{fone}</Info>
                </AreaTable>
              </Column>
              <Column flex={2}>
                <AreaTable>
                  <Info>{date}</Info>
                </AreaTable>
              </Column>
            </Row>
          );
        }
        return null;
      })}
    </AreaTable>
  );
}
TableBody.propTypes = {
  infoTable: PropTypes.arrayOf(PropTypes.obj),
};
TableBody.defaultProps = {
  infoTable: [
    {
      id: 'Código',
      name: 'Nome',
      email: 'E-mail',
      fone: 'Telefone',
      date: 'Data',
    },
    {
      id: '1',
      name: 'Anderson',
      email: 'Anderson@gmail.com',
      fone: '(16) 9 9305-6772',
      date: '05/07/1999',
    },
    {
      id: '1',
      name: 'Andréia',
      email: 'Andreia@gmail.com',
      fone: '(16) 9 9191-1396',
      date: '05/07/1945',
    },
  ],
};
