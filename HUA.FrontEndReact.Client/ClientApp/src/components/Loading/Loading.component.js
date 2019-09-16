import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <CircularProgress />
    </div>
);

export default Loading;
