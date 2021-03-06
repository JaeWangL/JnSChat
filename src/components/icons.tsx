import {
    Icon,
    IconElement,
} from '@ui-kitten/components';
import React from 'react';
import {
    ImageProps,
    ImageStyle,
} from 'react-native';

export const ArrowBackIconFill = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="arrow-back" />
);

export const EmailIconFill = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="email" />
);

export const EyeOffIconFill = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="eye-off" />
);

export const MessageCircleIconOutline = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="message-circle-outline" />
);

export const MicIconFill = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="mic" />
);

export const PersonIconOutline = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="person-outline" />
);

export const PlusCircleIconFill = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="plus-circle" />
);

export const PlusIconFill = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="plus" />
);

export const Settings2IconOutline = (style: ImageStyle): IconElement<ImageProps> => (
    <Icon {...style} name="settings-2-outline" />
);
