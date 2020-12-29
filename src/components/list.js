(() => ({
  name: 'list',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll } = B;
    const { modelId, filter, property, limit } = options;
    const isDev = env === 'dev';

    function devCanvas() {
      return <div className={classes.root}>Development</div>;
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
                return <span>Something went wrong: {error.message} :(</span>;
              }

              const { totalCount, results } = data;

              return (
                <div>
                  <p>There are {totalCount} records.</p>
                  <ul>
                    {results.map(row => (
                      <li key={row.id}>{row.name}</li>
                    ))}
                  </ul>
                </div>
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
