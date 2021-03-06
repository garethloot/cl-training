(() => ({
  name: 'list',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, GetAll, getProperty } = B;
    const { modelId, filter, property, limit } = options;
    const isDev = env === 'dev';

    function devCanvas() {
      const items = Array.from(Array(limit).keys());
      return (
        <div>
          <p>There are {limit} records.</p>
          <ul>
            {items.map(item => (
              <li key={item}>{`Item ${item}`}</li>
            ))}
          </ul>
        </div>
      );
    }

    function prodCanvas() {
      const { name: propertyName } = getProperty(property);
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
                  <ul>
                    {results.map(row => (
                      <li key={row.id}>{row[propertyName]}</li>
                    ))}
                  </ul>
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
