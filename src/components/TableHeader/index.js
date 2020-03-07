import React from 'react';

import {
  AreaTitleSearchTable,
  AreaItensTable,
  AreaSearchAdd,
  TitleList,
  IconSearch,
  AreaIcon,
  AreaIconClear,
  AreaInputSearch,
  SearchInput,
  IconClean,
  IconPlus,
  AreaIconAdd,
} from './styles';

export default function TableHeader() {
  return (
    <AreaTitleSearchTable>
      <AreaItensTable align="flex-start">
        <TitleList>Editable Example</TitleList>
      </AreaItensTable>
      <AreaItensTable align="flex-end">
        <AreaSearchAdd>
          <AreaIcon>
            <IconSearch />
          </AreaIcon>
          <AreaInputSearch>
            <SearchInput placeholder="Pesquisar:" />
          </AreaInputSearch>
          <AreaIconClear>
            <IconClean />
          </AreaIconClear>
        </AreaSearchAdd>
        <AreaIconAdd>
          <AreaIcon>
            <IconPlus />
          </AreaIcon>
        </AreaIconAdd>
      </AreaItensTable>
    </AreaTitleSearchTable>
  );
}
