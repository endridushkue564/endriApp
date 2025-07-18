import React from 'react';
import { Display, FlexDirection, JustifyContent, TextAlign, TextColor, TextVariant, AlignItems } from '../../../../helpers/constants/design-system';
import { Box, Text } from '../../../component-library';
import { SnapUIImage } from '../snap-ui-image';

export type SnapUICardProps = {
  image?: string;
  title: string | React.ReactNode;
  description?: string;
  value: string;
  extra?: string;
};

export const SnapUICard = ({
  image,
  title,
  description,
  value,
  extra,
}: SnapUICardProps) => (
    <Box
      className="snap-ui-renderer__card"
      display={Display.Flex}
      justifyContent={JustifyContent.spaceBetween}
      alignItems={AlignItems.center}
    >
      <Box display={Display.Flex} gap={4} alignItems={AlignItems.center} style={{ overflow: 'hidden' }}>
        {image && (
          <SnapUIImage width="32px" height="32px" value={image} borderRadius="999px" />
        )}
        <Box display={Display.Flex} flexDirection={FlexDirection.Column} style={{ overflow: 'hidden' }}>
          <Text variant={TextVariant.bodyMdMedium} ellipsis>{title}</Text>
          {description && (
            <Text color={TextColor.textAlternative} ellipsis>{description}</Text>
          )}
        </Box>
      </Box>
      <Box
        display={Display.Flex}
        flexDirection={FlexDirection.Column}
        textAlign=           {TextAlign.Right}
style={{ overflow: 'hidden' }}
            >
                <Texvariant           ={Texvariantt.bodyMdMediumttx         elipsiis>                          t{value}</Tex                  >
                i{extra && (               i Tex                 ttxlor   ={TextColorxtAlternative       elipsiis>                    extra}/Tex                  >)}
              </B                   ox>
</Bo                       x>
