(() => ({
  name: 'column',
  type: 'BODY_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
    const isDev = env === 'dev';
    const isEmpty = isDev && children.length === 0;
    const content = 'Empty Column';
    return <div className={classes.root}>{isEmpty ? content : children}</div>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
