import { NameType } from '@endriapp/name-controller';
import React, { memo, useState } from 'react';
import {
  AlignItems,
  Display,
  FlexDirection,
  TextColor,
} from '../../../../../helpers/constants/design-system';
import { Box, Text } from '../../../../component-library';
import NicknamePopovers from '../../../modals/nickname-popovers';
import Name from '../../../name/name';
import { shortenAddress } from '../../../../../helpers/utils/util';
import Identicon from '../../../../ui/identicon';
import { useFallbackDisplayName } from './hook';

export type ConfirmInfoRowAddressProps = {
  address: string;
  chainId: string;
  isSnapUsingThis?: boolean;
};

export const ConfirmInfoRowAddress = memo(
  ({ address, chainId, isSnapUsingThis }: ConfirmInfoRowAddressProps) => {
    const { displayName, hexAddress } = useFallbackDisplayName(address);
    const [isNicknamePopoverShown, setIsNicknamePopoverShown] = useState(false);

    const handleDisplayNameClick = () => setIsNicknamePopoverShown(true);
    const onCloseHandler = () => setIsNicknamePopoverShown(false);

    return (
      <Box
        display={Display.Flex}
        flexDirection={FlexDirection.Row}
        alignItems={AlignItems.center}
      >
        {isSnapUsingThis ? (
          <Box
            display={Display.Flex}
            flexDirection={FlexDirection.Row}
            alignItems={AlignItems.center}
          >
            <Identicon address={address} diameter={16} />
            <Text
              marginLeft={2}
              color={TextColor.inherit}
              data-testid="confirm-info-row-display-name"
            >
              {shortenAddress(address)}
            </Text>
          </Box>
        ) : (
          <Name
            value={hexAddress}
            type={NameType.ETHEREUM_ADDRESS}
            preferContractSymbol
            variation={chainId}
          />
        )}
        {!isSnapUsingThis && isNicknamePopoverShown && (
          <NicknamePopovers
            onClose={onCloseHandler}
            address={hexAddress}
          />
        )}
      </Box>
    );
  },
);
