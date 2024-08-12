// @flow
import ContentUploader from '../ContentUploader';

export const basic = {};

export default {
    title: 'Elements/ContentUploader',
    component: ContentUploader,
    args: {
        isFolderUploadEnabled: true,
        features: global.FEATURE_FLAGS,
        rootFolderId: global.FOLDER_ID,
        token: global.TOKEN,
    },
};
