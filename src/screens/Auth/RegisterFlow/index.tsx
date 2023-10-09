import React from 'react';

import {MainContainer, Text} from '../../../components';
import {colors} from '../../../theme/theme';

export function MainRegisterScreen() {
  return (
    <MainContainer primary>
      <Text color={colors.text} content="MAIN REGISTER" />
    </MainContainer>
  );
}
