'use client';

import { NextStudioLoading } from 'next-sanity/studio/loading';

import config from '../../../../sanity.config';

const Loading = () => <NextStudioLoading config={config} />;

export default Loading;
