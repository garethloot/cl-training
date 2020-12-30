(() => ({
  name: 'dataList',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll, ModelProvider } = B;
    const { modelId, filter, limit } = options;
    const isDev = env === 'dev';

    function devCanvas() {
      return (
        <div>
          <p>There are {limit} records.</p>
          <div>
            <div>{children}</div>
          </div>
        </div>
      );
    }

    function prodCanvas() {
      return (
        <div className={classes.root}>
          <GetAll modelId={modelId} filter={filter} skip={0} take={limit}>
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return <span>Loading...</span>;
              }

              if (error) {
                return <span>Something went wrong: {error.message}</span>;
              }

              const { totalCount, results } = data;

              return (
                <>
                  <p>There are {totalCount} records.</p>
                  <div>
                    {results.map(row => (
                      <ModelProvider key={row.id} value={row} id={modelId}>
                        {children}
                      </ModelProvider>
                    ))}
                  </div>
                </>
              );
            }}
          </GetAll>
        </div>
      );
    }
    return isDev ? devCanvas() : prodCanvas();
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
